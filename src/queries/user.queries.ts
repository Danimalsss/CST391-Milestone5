export const userQueries = {
    createUser: 'INSERT INTO users (username, password) VALUES (?, ?)',
    
    findUserByUsername: 'SELECT * FROM users WHERE username = ?',
};
