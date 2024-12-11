import { Request, Response, Router } from 'express';
import * as ArtistController from '../controllers/artistsController';

const router = Router();
router
    .route('/artists')
    .get(ArtistController.readArtists);

router.
    route('/albums').
    put(ArtistController.update);

router.
    route('/albums').
    put(ArtistController.createArtist);

export default router;