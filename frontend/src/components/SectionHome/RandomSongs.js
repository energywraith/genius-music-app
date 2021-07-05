import { Link } from 'react-router-dom'
import { RandomSongsList } from "./RandomSongs.style"

const RandomSongs = ({ randomSongs, fetchRandomSongs }) => {
  return (
    <RandomSongsList>
      {randomSongs.map(song =>
        <li key={song.id}>
          <Link to={`/song/${song.id}`}>
            {song.full_title}
          </Link>
        </li>
      )}

      <button onClick={() => fetchRandomSongs(2)}>
        Refresh random songs
      </button>
    </RandomSongsList>
  )
}

export default RandomSongs