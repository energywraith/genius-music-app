import { Link } from 'react-router-dom'
import {
  Container,
  CoverImage,
  Name,
  DescriptionStyled,
  Details,
  Divider
} from './Introduction.style'

const Introduction = ({ details }) => {
  return (
    <Container>
      <CoverImage src={details.cover_art_url} alt='album cover' />
      <Name> {details.name} </Name>
      <DescriptionStyled content={details.description_preview} />
      <Details>
        <li>
          <Link to={`/artist/${details.artist.id}`}>
            {details.artist.name}
          </Link>
        </li>
        <Divider />
        <li>
          {details.tracks.length} tracks
        </li>
        <Divider />
        <li>
          {details.release_date}
        </li>
      </Details>
    </Container>
  )
}

export default Introduction