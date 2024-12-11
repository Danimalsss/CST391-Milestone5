import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MusicApp from './MusicApp';
import NavBar from './navbar';
import UpdateTrackPage from './update/UpdateTrackPage';
import UpdateAlbumPage from './update/UpdateAlbumPage';
import UpdateArtistPage from './update/UpdateArtistPage';
import CreateAlbumPage from './create/CreateAlbumPage';
import CreateArtistPage from './create/CreateArtistPage';
import CreateTrackPage from './create/CreateTrackPage';
import Register from './Register';
import Login from './Login';
import CreatePage from './CreatePage';
import PrivateRoute from './PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/music-list" element={<MusicApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private Routes */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/create" element={<CreatePage />} />
          <Route path="/update/tracks/:id" element={<UpdateTrackPage />} />
          <Route path="/update/albums/:id" element={<UpdateAlbumPage />} />
          <Route path="/update/artists/:id" element={<UpdateArtistPage />} />
          <Route path="/create/tracks" element={<CreateTrackPage />} />
          <Route path="/create/albums" element={<CreateAlbumPage />} />
          <Route path="/create/artists" element={<CreateArtistPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
