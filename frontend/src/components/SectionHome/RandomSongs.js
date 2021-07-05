import { Link } from 'react-router-dom'
import { RandomSongsList } from "./RandomSongs.style"

const RandomSongs = ({ randomSongs }) => {
  return (
    <RandomSongsList>
      {randomSongs.map(song =>
        <li key={song.id}>
          <Link to={`/song/${song.id}`}>
            {song.full_title}
          </Link>
        </li>
      )}
    </RandomSongsList>
  )
}

export default RandomSongs