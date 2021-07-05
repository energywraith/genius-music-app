import { Switch, Route } from 'react-router-dom'
import useDataResource from './hooks/useDataResource'

import Nav from './components/Nav'
import SearchBar from './components/SearchBar'
import SectionHome from './components/SectionHome'
import SectionSong from './components/SectionSong'
import SectionAlbum from './components/SectionAlbum'
import SectionArtist from './components/SectionArtist'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

import GlobalStyles from './GlobalStyles'
import { AppContainer } from './App.style'
import './App.css'

const App = () => {
  const [ data, randomSongs ] = useDataResource()

  return (
    <AppContainer>
      <GlobalStyles />
      <Nav />
      <SearchBar />

      <Switch>
        <Route path='/artist'>
          <NotFound data={data}>
            <SectionArtist details={data} />
          </NotFound>
        </Route>
        <Route path='/song'>
          <NotFound data={data}>
            <SectionSong details={data} />
          </NotFound>
        </Route>
        <Route path='/album'>
          <NotFound data={data}>
            <SectionAlbum details={data} />
          </NotFound>
        </Route>
        <Route path='/'>
          <SectionHome randomSongs={randomSongs} />
        </Route>
      </Switch>

      <Footer />
    </AppContainer>
  )
}

export default App;
