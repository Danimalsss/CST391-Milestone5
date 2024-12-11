import { execute } from '../services/mysql.connector';
import { Track } from '../models/tracks.model';
import { trackQueries } from '../queries/tracks.queries';
import { RequestHandler } from 'express';
import { OkPacket } from 'mysql';

export const readTracks = async () => {
  return execute<Track[]>(trackQueries.readTracks,[]);
};

export const createTrack = async (track: Track) => {
  return execute<OkPacket>(trackQueries.createTrack,
  [track.trackname, track.albumId]);
};
  
/*
  getByAlbumId: async (albumId: number): Promise<Track[]> => {
    try {
      return await execute<Track[]>(trackQueries.readTracksByAlbumId, [albumId]);
    } catch (error) {
      throw new Error('Failed to retrieve tracks by albumId');
    }
  },

  

  update: async (id: number, trackname: string, albumId: number): Promise<any> => {
    try {
      return await execute(trackQueries.updateTrack, [trackname, albumId, id]);
    } catch (error) {
      throw new Error('Failed to update track');
    }
  },

  delete: async (id: number): Promise<any> => {
    try {
      return await execute(trackQueries.deleteTrack, [id]);
    } catch (error) {
      throw new Error('Failed to delete track');
    }
  },
};
*/