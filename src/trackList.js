const TracksList = ({ tracks, onSelect }) => (
    <ul>
      {tracks.map((track) => (
        <li key={track.id}>
          <span>{track.trackname}</span>
          <span>{track.album}</span>
          <button onClick={() => onSelect(track.id)}>Select</button>
        </li>
      ))}
    </ul>
  );
  