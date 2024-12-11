// MusicApp.js
import React, { useState, useEffect } from 'react';
import MusicListPage from './MusicListPage';

const MusicApp = () => {
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('tracks');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (category) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:5000/${category}`); // Removed /api
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      switch(category) {
        case 'tracks':
          setTracks(data);
          break;
        case 'albums':
          setAlbums(data);
          break;
        case 'artists':
          setArtists(data);
          break;
        default:
          break;
      }
    } catch (err) {
      console.error(`Error fetching ${category}:`, err);
      setError(`Failed to fetch ${category}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentCategory);
  }, [currentCategory]);

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <MusicListPage 
      tracks={tracks}
      albums={albums}
      artists={artists}
      currentCategory={currentCategory}
      onCategoryChange={handleCategoryChange}
      loading={loading}
      error={error}
    />
  );
};

export default MusicApp;
