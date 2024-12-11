import { execute } from '../services/mysql.connector';
import { User } from '../models/user.model';
import { userQueries } from '../queries/user.queries';
import { OkPacket } from 'mysql';

// Fetch user by username
export const findUserByUsername = async (username: string): Promise<User | null> => {
    const users = await execute<User[]>(userQueries.findUserByUsername, [username]);
    return users.length > 0 ? users[0] : null;
};

// Create a new user
export const createUser = async (user: User): Promise<OkPacket> => {
    return execute<OkPacket>(userQueries.createUser, [user.username, user.password]);
};
