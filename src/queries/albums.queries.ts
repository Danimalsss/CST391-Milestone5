export const albumQueries = {
    readAlbums: `
      SELECT
          id AS id, title AS title, artist AS artist,
          description AS description, year AS year, image AS image
      FROM \`391-milestone\`.albums
    `,
  
    readAlbumsByArtist: `
        SELECT
            id as albumid, title AS title, artist AS artist,
            description AS description, year AS year, image AS image
        FROM \`391-milestone\`.albums
        WHERE \`391-milestone\`.albums.artist = ?
        `,
    readAlbumsByArtistSearch: `
        SELECT
            id as id, title AS title, artist AS artist,
            description AS description, year AS year, image AS image
        FROM \`391-milestone\`.albums
        WHERE \`391-milestone\`.albums.artist LIKE ?
        `,
    readAlbumsByDescriptionSearch: `
        SELECT
            id as id, title AS title, artist AS artist,
            description AS description, year AS year, image AS image
        FROM \`391-milestone\`.albums
        WHERE \`391-milestone\`.albums.description LIKE ?
        `,
    readAlbumsByAlbumId: `
        SELECT
            id as id, title AS title, artist AS artist,
            description AS description, year AS year, image AS image
        FROM \`391-milestone\`.albums
        WHERE \`391-milestone\`.albums.id = ?
        `,  
    createAlbum: `
        INSERT INTO ALBUMS(title, artist, description, year, image) VALUES(?,?,?,?,?)
        `,
    updateAlbum: ` 
        UPDATE albums SET title = ?, artist = ?, description = ?, year = ?, image = ? WHERE id = ?;
  `,
    deleteAlbum: `
        DELETE FROM \`391-milestone\`.albums
        WHERE id = ?
        `,
  }
  
  
  
  
  
  /*export const albumQueries = {
      readAlbums: `
        SELECT
          id as albumid, artist_id as artistid, year AS year, image AS image, description AS description
        FROM music.albums
      `,
      readAlbumsByArtistId: `
        SELECT
          id as albumid, artist_id as artistid, year AS year, image AS image, description AS description
        FROM music.albums
        WHERE music.albums.artist_id = ?
      `,
      createAlbum: `
        INSERT INTO albums(artist_id, year, image, description) VALUES(?, ?, ?, ?)
      `,
      updateAlbum: `
        UPDATE music.albums
        SET artist_id = ?, year = ?, image = ?, description = ?
        WHERE id = ?
      `,
      deleteAlbum: `
        DELETE FROM music.albums
        WHERE id = ?
      `,
    };*/
    