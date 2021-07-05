import ListItem from "./ListItem"
import { ListContainer } from "./SearchResults.style"

const ResultsList = ({ results, expanded, setExpanded }) => {
  return (
    <ListContainer expanded={expanded}>
      {results.artists.length > 0 && 
        <>
          <h5> Artists </h5>
          {results.artists.slice(0, 2).map(artist => 
            <ListItem key={artist.result.id}
              id={artist.result.id}
              thumbnail={artist.result.header_image_url}
              title={artist.result.name}
              setExpanded={setExpanded}
              type='artist'
            />
          )}
        </>
      }
      {results.songs.length > 0 && 
        <>
          <h5> Songs </h5>
          {results.songs.map(song => 
            <ListItem key={song.result.id}
              id={song.result.id}
              thumbnail={song.result.header_image_thumbnail_url}
              title={song.result.full_title}
              setExpanded={setExpanded}
              type='song'
            />
          )}
        </>
      }
      {results.albums.length > 0 && 
        <>
          <h5> Albums </h5>
          {results.albums.slice(0, 2).map(album => 
            <ListItem key={album.result.id}
              id={album.result.id}
              thumbnail={album.result.cover_art_thumbnail_url}
              title={album.result.full_title}
              setExpanded={setExpanded}
              type='album'
            />
          )}
        </>
      }
    </ListContainer>
  )
}

export default ResultsList