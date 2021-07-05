import { Helmet } from 'react-helmet'
import Introduction from './Introduction'
import Album from "./Album"
import Loader from "../Loader"
import { Container, Albums } from "./index.style"

const SectionArtist = ({ details }) => {
  return details && details._type === 'artist'
    ? <Container>
        <Helmet>
          <title> {details.name} </title>
        </Helmet>

        <Introduction artist={details} />

        <h2> Albums </h2>
        <Albums>
          {details.albums.map(album =>
            <Album album={album} key={album.id} />
          )}
        </Albums>
      </Container>
    : <Loader />
}

export default SectionArtist