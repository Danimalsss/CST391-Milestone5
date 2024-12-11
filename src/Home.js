import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homeCard-container">
      <div className="homeCard">
        <h3>About Divine Melodies</h3>
        <p>
          Divine Melodies is a Christian music platform that celebrates the 
          spiritual power of music and connects people to uplifting songs.
        </p>
      </div>

      {/* Music List Button */}
      <div className="homeCard">
        <h3>Music List</h3>
        <p>Discover a collection of tracks, albums, and artists!</p>
        <Link to="/music-list">
          <button>View Music List</button>
        </Link>
      </div>

      <div className="homeCard">
        <h3>Other Info</h3>
        <p>More information about the app.</p>
      </div>
    </div>
  );
};

export default Home;
