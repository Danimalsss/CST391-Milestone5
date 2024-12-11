import express, { Router } from 'express';
import * as TrackController from '../controllers/trackController';

const router = Router();
router
    .route('/tracks')
    .get(TrackController.readTracks);
export default router;
/*
// Route to get tracks by album ID
router.get('/album/:albumId', TrackController.getByAlbumId);

// Route to get a specific track by its ID


// Route to create a new track
router.post('/', TrackController.create);

// Route to update an existing track
router.put('/:id', TrackController.update);

// Route to delete a track
router.delete('/:id', TrackController.delete);

export default router;
*/