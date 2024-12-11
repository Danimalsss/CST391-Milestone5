import { Artist } from '../models/artists.model'
import { execute } from '../services/mysql.connector';
import { artistQueries } from '../queries/artists.queries'
import { OkPacket } from 'mysql';

export const readArtists = async () => {
    return execute<Artist[]>(artistQueries.readArtists, []);
};

export const updateArtist = async (artist: Artist) => {
    return execute<OkPacket>(artistQueries.updateArtist,
    [artist.artistName, artist.genre, artist.description]);
};

export const createArtist = async (artist: Artist) => {
    return execute<OkPacket>(artistQueries.createArtist,
    [artist.artistName, artist.genre, artist.description] );
};
/*export const ArtistDAO = {

    getAll: async (): Promise<any[]> => {
        const query = 'SELECT * FROM artists';
        console.log('Running query:', query);
        try {
            return await execute<any[]>(query, []);
        } catch (error) {
            throw new Error('Failed to retrieve artists');
        }
    },

    getById: async (id: number): Promise<any> => {
        const query = 'SELECT * FROM artists WHERE id = ?';
        try {
            const results = await execute<any[]>(query, [id]);
            return results[0]; // Assuming only one artist is returned for the given id
        } catch (error) {
            throw new Error('Failed to retrieve artist by ID');
        }
    },

    

    update: async (id: number, name: string, genre: string, description: string): Promise<any> => {
        const query = 'UPDATE artists SET name = ?, genre = ?, description = ? WHERE id = ?';
        try {
            const result = await execute<any>(query, [name, genre, description, id]);
            return result;
        } catch (error) {
            throw new Error('Failed to update artist');
        }
    },

    delete: async (id: number): Promise<any> => {
        const query = 'DELETE FROM artists WHERE id = ?';
        try {
            const result = await execute<any>(query, [id]);
            return result;
        } catch (error) {
            throw new Error('Failed to delete artist');
        }
    },
};*/

