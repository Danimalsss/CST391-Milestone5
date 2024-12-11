const AlbumsList = ({ albums, onSelect }) => (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          <span>{album.title}</span>
          <span>{album.artist}</span>
          <span>{album.year}</span>
          <button onClick={() => onSelect(album.id)}>Select</button>
        </li>
      ))}
    </ul>
  );
  