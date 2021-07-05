import { useEffect, useState } from 'react'
import { search } from '../../services/lyrics'
import SearchResults from './SearchResults'

import { Container } from './index.style'

const SearchBar = () => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const [results, setResults] = useState({ songs: [], artists: [], albums: [] })
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      if(searchInputValue.length > 0) {
        let response = await search(searchInputValue)
        setResults(response)
      } else {
        setResults({ songs: [], artists: [], albums: [] })
      }
    }

    // Timeout set to avoid overlapping requests
    const timeoutId = setTimeout(() => fetchData(), 250)
    return () => clearTimeout(timeoutId)
  }, [searchInputValue])

  return (
    <Container onFocus={() => setExpanded(true)} onBlur={() => setExpanded(false)}>
      <input
        placeholder='Search a lyrics, name, album or author'
        value={searchInputValue}
        onChange={({target}) => setSearchInputValue(target.value)}
        spellCheck='false' />
      <SearchResults results={results} expanded={expanded} setExpanded={setExpanded} />
    </Container>
  )
}

export default SearchBar