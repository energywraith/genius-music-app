import { Helmet } from 'react-helmet'
import Introduction from './Introduction'
import TracksList from './TracksList'
import Loader from '../Loader'
import { Container } from './index.style'

const SectionAlbum = ({ details }) => {
  return details && details._type === 'album' 
    ? <Container>
        <Helmet>
          <title> {details.name} </title>
        </Helmet>

        <Introduction details={details} />
        <TracksList tracks={details.tracks} />
      </Container>
    : <Loader />
}

export default SectionAlbum