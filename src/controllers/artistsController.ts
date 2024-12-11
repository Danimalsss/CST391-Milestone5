import { Request, RequestHandler, Response } from 'express';
import * as ArtistDAO  from '../daos/artists.dao';
import { OkPacket } from 'mysql';


export const readArtists: RequestHandler = async (req: Request, res: Response) => {
    try {
        const artists = await ArtistDAO.readArtists();

        res.status(200).json(
            artists
        );
    } catch (error) {
        console.error('[artists.controller][ReadArtists][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching artists'
        });
    }
};

export const update: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, genre, description } = req.body;
    const result = await ArtistDAO.updateArtist(req.body);
    if (result.affectedRows > 0) {
      res.json({ message: 'Artist updated' });
    } else {
      res.status(404).json({ message: 'Artist not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating artist' });
  }
};

export const createArtist: RequestHandler = async (req: Request, res: Response) => {
  try {
      const okPacket: OkPacket = await ArtistDAO.createArtist(req.body);

      console.log('req-body', req.body);

      console.log('artist', okPacket);
      
      res.status(200).json(
          okPacket
      );
  } catch (error) {
      console.error('[artists.controller][createArtist][Error] ', error);
      res.status(500).json({
          message: 'There was an error when writing artists'
      }); 
  }
};

 /* getById: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const artist = await ArtistDAO.getById(parseInt(id));
      if (artist) {
        res.json(artist);
      } else {
        res.status(404).json({ message: 'Artist not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving artist' });
    }
  },

 

  

  delete: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const result = await ArtistDAO.delete(parseInt(id));
      if (result.affectedRows > 0) {
        res.json({ message: 'Artist deleted' });
      } else {
        res.status(404).json({ message: 'Artist not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting artist' });
    }
  },
};*/
