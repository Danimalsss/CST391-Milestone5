import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateAlbumPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [album, setAlbum] = useState({
    title: '',
    artist: '',
    year: '',
    description: '',
    image: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await fetch(`http://localhost:5000/albums/${id}`);
        if (!response.ok) throw new Error('Failed to fetch album');
        const data = await response.json();
        setAlbum(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchAlbum();
  }, [id]);

  const handleChange = (e) => {
    // Ensure we are not setting undefined values
    setAlbum({ ...album, [e.target.name]: e.target.value || '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/albums/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(album),
      });

      if (!response.ok) throw new Error('Failed to update album');
      alert('Album updated successfully!');
      navigate('/'); // Redirect after successful update
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Update Album</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={album.title || ''} // Ensure default value
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="artist"
          value={album.artist || ''} // Ensure default value
          onChange={handleChange}
          placeholder="Artist"
          required
        />
        <input
          type="text"
          name="year"
          value={album.year || ''} // Ensure default value
          onChange={handleChange}
          placeholder="Year"
          required
        />
        <input
          type="text"
          name="description"
          value={album.description || ''} // Ensure default value
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="image"
          value={album.image || ''} // Ensure default value
          onChange={handleChange}
          placeholder="Image URL"
        />
        <button type="submit">Update Album</button>
      </form>
    </div>
  );
};

export default UpdateAlbumPage;
