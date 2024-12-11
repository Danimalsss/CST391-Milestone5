// UpdateArtistPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateArtistPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artist, setArtist] = useState({ name: '', genre: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await fetch(`http://localhost:5000/artists/${id}`); // Removed /api
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setArtist(data);
      } catch (err) {
        setError('Error fetching artist data');
      }
    };

    fetchArtist();
  }, [id]);

  const handleChange = (e) => {
    setArtist({ ...artist, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:5000/artists/${id}`, { // Removed /api
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(artist),
      });
      navigate('/'); // Redirect after successful update
    } catch (err) {
      setError('Error updating artist');
    }
  };

  return (
    <div>
      <h2>Update Artist</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={artist.name}
          onChange={handleChange}
          placeholder="Artist Name"
          required
        />
        <input
          type="text"
          name="genre"
          value={artist.genre}
          onChange={handleChange}
          placeholder="Genre"
        />
        <button type="submit">Update Artist</button>
      </form>
    </div>
  );
};

export default UpdateArtistPage;
