import { Request, RequestHandler, Response } from 'express';
import { Album } from '../models/albums.model';
import { Track } from './../models/tracks.model';
import * as AlbumDao from '../daos/albums.dao' ;
import * as TracksDao from '../daos/tracks.dao';
import { OkPacket } from 'mysql';

export const readAlbums: RequestHandler = async (req: Request, res: Response) => {
    try {
        let albums;
        let albumId = parseInt(req.query.albumId as string);

        console.log('albumId', albumId);
        if (Number.isNaN(albumId)) {
            albums = await AlbumDao.readAlbums();
        } else {
            albums = await AlbumDao.readAlbumsByAlbumId(albumId);
        }
        await readTracks(albums, res);
        
        res.status(200).json(
            albums
        );
        } catch (error) {
            console.error('[albums.controller][readAlbums][Error] ', error);
            res.status(500).json({
                message: 'There was an error when fetching albums'
        });
    }
};

export const readAlbumsByArtist: RequestHandler = async (req: Request, res: Response) => {
    try {  
        const albums = await AlbumDao.readAlbumsByArtist(req.params.artist);

        await readTracks(albums, res);
        
        res.status(200).json(
            albums
        );
    } catch (error) {
        console.error('[albums.controller][readAlbums][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching albums'
        });
    }
};

export const readAlbumsByArtistSearch: RequestHandler = async (req: Request, res: Response) => {
    try{
        console.log('search', req.params.search);
        const albums = await AlbumDao.readAlbumsByArtistSearch('%' + req.params.search + '%');
        
        await readTracks(albums, res);
        
        res.status(200).json(
            albums
        );
    } catch (error) {
        console.error('[albums.controller][readAlbums][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching albums'
        });
    }
};

export const readAlbumsByDescriptionSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const albums = await AlbumDao.readAlbumsByDescriptionSearch('%' + req.params.search + '%');
        
        await readTracks(albums, res);

        res.status(200).json(
            albums
        );
     } catch (error) {
        console.error ('[albums.controller][readAlbums][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching albums'
        });
    }
};

export const createAlbum: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await AlbumDao.createAlbum(req.body);

        console.log('req-body', req.body);

        console. log('album', okPacket);
        
        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[albums.controller][createAlbum][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing albums'
        }); 
    }
};


// Define the updateAlbum function
export const updateAlbum: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
      const albumId = req.params.albumId;
      const albumData: Album = {
          albumId: Number(albumId),
          title: req.body.title,
          artist: req.body.artist,
          description: req.body.description,
          year: req.body.year,
          image: req.body.image,
      };

      const okPacket: OkPacket = await AlbumDao.updateAlbum(albumData);

      if (okPacket.affectedRows === 0) {
          res.status(404).json({ message: 'Album not found' });
          return;
      }

      res.status(200).json({
          message: 'Album updated successfully',
          updatedAlbumId: albumId,
          affectedRows: okPacket.affectedRows
      });
  } catch (error) {
      console.error('[albums.controller][updateAlbum][Error]', error);
      res.status(500).json({ message: 'There was an error when updating albums' });
  }
};


async function readTracks(albums: Album[], res: Response<any, Record<string, any>>) {
    for (let i = 0; i < albums. length; i++) {
        try {
            //const tracks = await TracksDao.readTracks(albums[i].albumId);
            //albums[i].tracks = tracks;

        } catch (error) {
            console.error('[albums.controller][readTracks][Error] ', error);
            res.status(500).json({
                message: 'There was an error when fetching album tracks'
            });
        }
    }
}

export const deleteAlbum: RequestHandler = async (req: Request, res: Response) => {
    try {
        let albumId = parseInt(req.params.albumId as string) ;

        console.log('albumId', albumId);
        if (!Number.isNaN(albumId)) {
            const response = await AlbumDao.deleteAlbum(albumId) ;
            res.status(200).json (
                response
            );
        } else {
            throw new Error ("Integer expected for albumid");
        }
    } catch (error) {
        console.error('[albums.controller][deleteAlbum][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting albums'
        });
    }
};






/*import { Request, Response } from 'express';
import { AlbumDAO } from '../daos/albums.dao';

export const AlbumController = {
  getAll: async (req: Request, res: Response): Promise<void> => {
    try {
      const albums = await AlbumDAO.getAll();
      res.json(albums);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving albums' });
    }
  },

  getByArtistId: async (req: Request, res: Response): Promise<void> => {
    try {
      const { artistId } = req.params;
      const albums = await AlbumDAO.getByArtistId(parseInt(artistId));
      if (albums.length > 0) {
        res.json(albums);
      } else {
        res.status(404).json({ message: 'Albums not found for this artist' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving albums' });
    }
  },

  create: async (req: Request, res: Response): Promise<void> => {
    try {
      const { artistId, year, image, description } = req.body;
      const result = await AlbumDAO.create(artistId, year, image, description);
      res.status(201).json({ message: 'Album created', id: result.insertId });
    } catch (error) {
      res.status(500).json({ message: 'Error creating album' });
    }
  },

  update: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { artistId, year, image, description } = req.body;
      const result = await AlbumDAO.update(parseInt(id), artistId, year, image, description);
      if (result.affectedRows > 0) {
        res.json({ message: 'Album updated' });
      } else {
        res.status(404).json({ message: 'Album not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating album' });
    }
  },

  delete: async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const result = await AlbumDAO.delete(parseInt(id));
      if (result.affectedRows > 0) {
        res.json({ message: 'Album deleted' });
      } else {
        res.status(404).json({ message: 'Album not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting album' });
    }
  },
};*/
