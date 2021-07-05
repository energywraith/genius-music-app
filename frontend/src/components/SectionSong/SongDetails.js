import { Link } from 'react-router-dom'
import YoutubeEmbed from './YoutubeEmbed'
import MediaLinks from './MediaLinks'
import {
  Aside,
  Artist,
  AlbumStyled,
  Wrapper,
  DescriptionStyled,
  CoverImage,
} from './SongDetails.style'

const SongDetails = ({ details }) => {
  return (
    <Aside>
      <Link to={`/artist/${details.primary_artist.id}`}>
        <Artist> {details.primary_artist.name} </Artist>
      </Link>
      <Wrapper>
        <CoverImage src={details.header_image_url} alt="Song cover" />
        <DescriptionStyled content={details.description_preview}/>
      </Wrapper>
      {details.youtube_url &&
        <YoutubeEmbed url={details.youtube_url} />
      }
      
      <MediaLinks mediaLinks={details.media} />

      {details.album &&
        <AlbumStyled album={details.album} />
      }
    </Aside>
  )
}

export default SongDetails