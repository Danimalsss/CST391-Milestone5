// NewPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const CreatePage = () => {
  return (
    <div>
      <h2>Create New</h2>
      <div>
        <Link to="/create/albums">
          <button>Create Album</button>
        </Link>
        <Link to="/create/artists">
          <button>Create Artist</button>
        </Link>
        <Link to="/create/tracks">
          <button>Create Track</button>
        </Link>
      </div>
    </div>
  );
};

export default CreatePage;
