// UpdateTrackPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateTrackPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [track, setTrack] = useState({ trackname: '', albumId: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const response = await fetch(`http://localhost:5000/tracks/${id}`); // Removed /api
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setTrack(data);
      } catch (err) {
        setError('Error fetching track data');
      }
    };

    fetchTrack();
  }, [id]);

  const handleChange = (e) => {
    setTrack({ ...track, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:5000/tracks/${id}`, { // Removed /api
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(track),
      });
      navigate('/'); // Redirect after successful update
    } catch (err) {
      setError('Error updating track');
    }
  };

  return (
    <div>
      <h2>Update Track</h2>
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
        <button type="submit">Update Track</button>
      </form>
    </div>
  );
};

export default UpdateTrackPage;
