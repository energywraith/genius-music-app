import { Helmet } from 'react-helmet'
import SongDetails from './SongDetails'
import Loader from '../Loader'
import { Container, Name, Lyrics } from './index.style'

const SectionSong = ({ details }) => {
  return details && details._type === 'song'
    ? <Container>
        <Helmet>
          <title> {details.full_title} </title>
        </Helmet>

        <main>
          <Name> {details.full_title} </Name>
          <Lyrics dangerouslySetInnerHTML={{ __html: details.lyrics.replaceAll("[", "<span>[").replaceAll("]", "]</span>") }} />
        </main>

        <SongDetails details={details} />
      </Container>
    : <Loader />
}

export default SectionSong