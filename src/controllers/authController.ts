import { Request, Response } from 'express';
import { createUser, findUserByUsername } from '../daos/user.dao';
import { User } from '../models/user.model';

export const AuthController = {
    /**
     * Registers a new user in the system.
     * @param req - Express request object.
     * @param res - Express response object.
     */
    registerUser: async (req: Request, res: Response): Promise<void> => {
        const { username, password } = req.body;

        try {
            if (!username || !password) {
                res.status(400).json({ message: 'Username and password are required' });
                return;
            }

            const existingUser = await findUserByUsername(username);
            if (existingUser) {
                res.status(400).json({ message: 'Username already exists' });
                return;
            }

            const result = await createUser({ username, password });
            if (result.affectedRows > 0) {
                res.status(201).json({ 
                    message: 'User registered successfully', 
                    userId: result.insertId 
                });
            } else {
                res.status(400).json({ message: 'Failed to register user' });
            }
        } catch (error) {
            console.error('[AuthController][registerUser][Error]', error);
            res.status(500).json({ message: 'Error registering user' });
        }
    },

    /**
     * Logs in a user by validating their credentials.
     * @param req - Express request object.
     * @param res - Express response object.
     */
    loginUser: async (req: Request, res: Response): Promise<void> => {
        const { username, password } = req.body;

        try {
            if (!username || !password) {
                res.status(400).json({ message: 'Username and password are required' });
                return;
            }

            const user = await findUserByUsername(username);
            if (!user || user.password !== password) {
                res.status(400).json({ message: 'Invalid credentials' });
                return;
            }

            res.status(200).json({ 
                message: 'Login successful', 
                userId: user.id 
            });
        } catch (error) {
            console.error('[AuthController][loginUser][Error]', error);
            res.status(500).json({ message: 'Error logging in' });
        }
    }
};
