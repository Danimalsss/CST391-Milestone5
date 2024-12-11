import { Router } from 'express';
import * as AlbumsController from '../controllers/albumsController';

const router = Router();
router.
    route('/albums').
    get(AlbumsController.readAlbums);

router.
    route('/albums/:artist').
    get(AlbumsController.readAlbumsByArtist);

router.
    route('/albums/search/artist/:search').
    get(AlbumsController.readAlbumsByArtistSearch);

router.
    route('/albums/search/description/:search').
    get(AlbumsController.readAlbumsByDescriptionSearch);

router.
    route('/albums').
    post(AlbumsController.createAlbum);

router.
    route('/albums/:albumId').
    put(AlbumsController.updateAlbum);

router.
    route('/albums/:albumId').
    delete(AlbumsController.deleteAlbum);

export default router;



/*import express from 'express';
import { AlbumController } from '../controllers/albumsController';

const router = express.Router();

// Route to get all albums
router.get('/', AlbumController.getAll);

// Route to get albums by artist
router.get('/artist/:artistName', AlbumController.getByArtistId);

// Route to search albums by description

// Route to get a specific album by its ID

// Route to create a new album
router.post('/', AlbumController.create);

// Route to update an existing album
router.put('/:id', AlbumController.update);

// Route to delete an album
router.delete('/:id', AlbumController.delete);

export default router;*/
