const ArtistsList = ({ artists, onSelect }) => (
    <ul>
      {artists.map((artist) => (
        <li key={artist.id}>
          <span>{artist.name}</span>
          <span>{artist.genre}</span>
          <button onClick={() => onSelect(artist.id)}>Select</button>
        </li>
      ))}
    </ul>
  );
  