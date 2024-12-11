export const trackQueries = {
    readTracks: `
      SELECT
        id as trackid, trackname AS trackname, album_id AS albumid
      FROM \`391-milestone\`.tracks
    `,
    readTracksByAlbumId: `
      SELECT
        id as trackid, trackname AS trackname, album_id AS albumid
      FROM \`391-milestone\`.tracks
      WHERE \`391-milestone\`.tracks.album_id = ?
    `,
    createTrack: `
      INSERT INTO tracks(trackname, album_id) VALUES(?, ?)
    `,
    updateTrack: `
      UPDATE \`391-milestone\`.tracks
      SET trackname = ?, album_id = ?
      WHERE id = ?
    `,
    deleteTrack: `
      DELETE FROM \`391-milestone\`.tracks
      WHERE id = ?
    `,
  };
  