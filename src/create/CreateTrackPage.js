// CreateTrackPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTrackPage = () => {
  const navigate = useNavigate();
  const [track, setTrack] = useState({ trackname: '', albumId: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setTrack({ ...track, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/tracks', { // Adjust URL as needed
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(track),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      navigate('/'); // Redirect after successful creation
    } catch (err) {
      setError('Error creating track');
    }
  };

  return (
    <div>
      <h2>Create Track</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="trackname"
          value={track.trackname}
          onChange={handleChange}
          placeholder="Track Name"
          required
        />
        <input
          type="text"
          name="albumId"
          value={track.albumId}
          onChange={handleChange}
          placeholder="Album ID"
          required
        />
        <button type="submit">Create Track</button>
      </form>
    </div>
  );
};

export default CreateTrackPage;
