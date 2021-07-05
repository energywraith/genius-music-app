import { Link } from 'react-router-dom'
import { AlbumContainer, AlbumCover, AlbumContent, AlbumName, TracksList, Track } from './Album.style'

const Album = ({ album, className }) => {
  return (
    <AlbumContainer key={album.id} className={className}>
      <AlbumCover src={album.cover_art_url} alt={album.name} />
      <AlbumContent>
        <Link to={`/album/${album.id}`}>
          <AlbumName> {album.name} </AlbumName>
        </Link>
        <TracksList>
          {album && album.tracks.slice(0, 5).map(track =>
            <Track key={track.song.id}>
              <Link to={`/song/${track.song.id}`}> {track.song.title} </Link>
            </Track>
          )}
          {album.tracks.length - 5 > 0 &&
            <span>
              <Link to={`/album/${album.id}`}>
                and {album.tracks.length - 5} other tracks
              </Link>
            </span>
          }
        </TracksList>
      </AlbumContent>
    </AlbumContainer>
  )
}

export default Album