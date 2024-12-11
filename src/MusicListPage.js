import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MusicListPage.css';

const MusicListPage = ({
  tracks,
  albums,
  artists,
  currentCategory,
  onCategoryChange,
  loading,
  error
}) => {
  const navigate = useNavigate();

  const handleUpdateClick = (id, category) => {
    navigate(`/update/${category}/${id}`);
  };
  

  const handleDeleteClick = async (id, category) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/${category}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      // Optionally, you could refresh the list or remove the deleted item from state
      // For example, you might want to call a function to refresh the data
      // onRefreshData(); // Assuming you have a function to refresh data

      alert('Item deleted successfully!');
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('There was an error deleting the item.');
    }
  };

  return (
    <div>
      <div className="button-group">
        <button onClick={() => onCategoryChange('tracks')}>Tracks</button>
        <button onClick={() => onCategoryChange('albums')}>Albums</button>
        <button onClick={() => onCategoryChange('artists')}>Artists</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="card-container">
        {currentCategory === 'tracks' && !loading && (
          <>
            <h3>Tracks</h3>
            <div className="card-grid">
              {tracks.map((track) => (
                <div className="card" key={track.id}>
                  <h4>{track.trackname}</h4>
                  <p>Album: {track.albumTitle || 'Unknown'}</p>
                  <div className="card-buttons">
                    <button onClick={() => handleUpdateClick(track.id, 'tracks')}>Update</button>
                    <button onClick={() => handleDeleteClick(track.id, 'tracks')}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {currentCategory === 'albums' && !loading && (
          <>
            <h3>Albums</h3>
            <div className="card-grid">
              {albums.map((album) => (
                <div className="card" key={album.id}>
                  <img src={album.image} alt={album.title} className="card-image" />
                  <h4>{album.title}</h4>
                  <p>Artist: {album.artist}</p>
                  <p>Year: {album.year}</p>
                  <p>{album.description}</p>
                  <div className="card-buttons">
                    <button onClick={() => handleUpdateClick(album.id, 'albums')}>Update</button>
                    <button onClick={() => handleDeleteClick(album.id, 'albums')}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {currentCategory === 'artists' && !loading && (
          <>
            <h3>Artists</h3>
            <div className="card-grid">
              {artists.map((artist) => (
                <div className="card" key={artist.id}>
                  <h4>{artist.name}</h4>
                  <p>Genre: {artist.genre}</p>
                  <p>Description: {artist.description}</p>
                  <div className="card-buttons">
                    <button onClick={() => handleUpdateClick(artist.id, 'artists')}>Update</button>
                    <button onClick={() => handleDeleteClick(artist.id, 'artists')}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MusicListPage;
