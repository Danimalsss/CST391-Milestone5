// CreateArtistPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateArtistPage = () => {
  const navigate = useNavigate();
  const [artist, setArtist] = useState({ name: '', genre: '', description:'' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setArtist({ ...artist, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/artists', { // Adjust URL as needed
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(artist),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      navigate('/'); // Redirect after successful creation
    } catch (err) {
      setError('Error creating artist');
    }
  };

  return (
    <div>
      <h2>Create Artist</h2>
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
        <input
          type="text"
          name="description"
          value={artist.description}
          onChange={handleChange}
          placeholder="description"
        />
        <button type="submit">Create Artist</button>
      </form>
    </div>
  );
};

export default CreateArtistPage;
