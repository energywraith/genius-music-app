import { Container, Track } from './TracksList.style'
import { Link } from 'react-router-dom'

const TracksList = ({ tracks }) => {
  return (
    <Container>
      <h3> Tracks: </h3>

      {tracks.map(track =>
        <Track key={track.song.id}>
          <Link to={`/song/${track.song.id}`}>
            {track.song.title}
          </Link>
        </Track>
      )}
    </Container>
  )
}

export default TracksList