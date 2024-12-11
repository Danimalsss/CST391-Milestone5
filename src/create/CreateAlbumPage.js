// CreateAlbumPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAlbumPage = () => {
  const navigate = useNavigate();
  const [album, setAlbum] = useState({ title: '', artist: '', year: '', description: '', image: ''});
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setAlbum({ ...album, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/albums', { // Adjust URL as needed
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(album),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      navigate('/'); // Redirect after successful creation
    } catch (err) {
      setError('Error creating album');
    }
  };

  return (
    <div>
      <h2>Create Album</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={album.title}
          onChange={handleChange}
          placeholder="Album Title"
          required
        />
        <input
          type="text"
          name="artist"
          value={album.artist}
          onChange={handleChange}
          placeholder="Artist"
          required
        />
        <input
          type="text"
          name="year"
          value={album.year}
          onChange={handleChange}
          placeholder="Year"
          required
        />
        <input
          name="description"
          value={album.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          name="image"
          value={album.image}
          onChange={handleChange}
          placeholder="Image"
        />
        <button type="submit">Create Album</button>
      </form>
    </div>
  );
};

export default CreateAlbumPage;
