export const artistQueries = {
    readArtists: `
      SELECT 
          id AS artistid, 
          name AS name, 
          genre AS genre, 
          description AS description
      FROM \`391-milestone\`.artists
    `,
  
    readArtistById: `
      SELECT 
          id AS artistid, 
          name AS name, 
          genre AS genre, 
          description AS description
      FROM \`391-milestone\`.artists
      WHERE id = ?
    `,
  
    searchArtistsByName: `
      SELECT 
          id AS artistid, 
          name AS name, 
          genre AS genre, 
          description AS description
      FROM \`391-milestone\`.artists
      WHERE name LIKE ?
    `,
  
    createArtist: `
      INSERT INTO artists (name, genre, description)
      VALUES (?, ?, ?)
    `,
  
    updateArtist: `
      UPDATE \`391-milestone\`.artists
      SET name = ?, genre = ?, description = ?
      WHERE id = ?
    `,
  
    deleteArtist: `
      DELETE FROM \`391-milestone\`.artists
      WHERE id = ?
    `
  };
  