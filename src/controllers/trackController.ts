import { Request, RequestHandler, Response } from 'express';
import * as TrackDAO  from '../daos/tracks.dao';

export const readTracks: RequestHandler = async (req: Request, res: Response)  => {
    try {
      const tracks = await TrackDAO.readTracks();
      res.json(tracks);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving tracks' });
    }
  }

  /*getByAlbumId: async (req: Request, res: Response): Promise<void> => {
    try {
      const { albumId } = req.params;
      const tracks = await TrackDAO.getByAlbumId(parseInt(albumId));
      if (tracks.length > 0) {
        res.json(tracks);
      } else {
        res.status(404).json({ message: 'Tracks not found for this album' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving tracks' });
    }
  },

  create: async (req: Request, res: Response): Promise<void> => {
    try {
      const { trackname, albumId } = req.body;
      const result = await TrackDAO.create(trackname, albumId);
      res.status(201).json({ message: 'Track created', id: result.insertId });
    } catch (error) {
      res.status(500).json({ message: 'Error creating track' });
    }
  },

  update: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { trackname, albumId } = req.body;
      const result = await TrackDAO.update(parseInt(id), trackname, albumId);
      if (result.affectedRows > 0) {
        res.json({ message: 'Track updated' });
      } else {
        res.status(404).json({ message: 'Track not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating track' });
    }
  },

  delete: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const result = await TrackDAO.delete(parseInt(id));
      if (result.affectedRows > 0) {
        res.json({ message: 'Track deleted' });
      } else {
        res.status(404).json({ message: 'Track not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting track' });
    }
  },
};*/
