import { Helmet } from 'react-helmet'
import Loader from '../Loader'
import RandomSongs from './RandomSongs'
import { Main, OverviewParagraph } from './index.style'

const SectionHome = ({ randomSongs, fetchRandomSongs }) => {
  return (
    <Main>
      <Helmet>
        <title> Home </title>
      </Helmet>

      <h1> A bit about the page </h1>
      {/* <OverviewParagraph>
        Have you ever had lyrics of a song you cannot remind of stuck in your head?
        This page is here to end your suffering.
        Besides songs, you can find here your favourite albums or artists.
      </OverviewParagraph> */}
      {/* <OverviewParagraph>
        Besides songs, you can find here your favourite albums or artists.
      </OverviewParagraph> */}

      <OverviewParagraph>
        Have you ever had lyrics of a song you cannot remind of stuck in your head? This page is here to end your suffering.
        <p>
          Besides songs, you can find here your favourite albums or artists.
        </p>
      </OverviewParagraph>

      <h1> Random songs </h1>
      {randomSongs
        ? <RandomSongs randomSongs={randomSongs} fetchRandomSongs={fetchRandomSongs} />
        : <Loader />
      }
    </Main>
  )
}

export default SectionHome