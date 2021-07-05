import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { getSongData, getArtistData, getRandomSongs, getAlbumData } from '../services/lyrics'

const useDataResource = () => {
  const [data, setData] = useState(null)
  const [randomSongs, setRandomSongs] = useState(null)
  const location = useLocation()

  // Fetch data according to the type
  const fetchData = async (id, type) => {
    switch(type) {
      case 'song':
        return await getSongData(id)
      case 'album':
        return await getAlbumData(id)
      case 'artist':
        return await getArtistData(id)
      default:
        return null
    }
  }

  // On first render fetch 2 random songs to display on home page
  useEffect(() => {
    const handleFetchData = async () => {
      try {
        setRandomSongs(await getRandomSongs(2))
      } catch (error) {}
    }
    
    handleFetchData()
  }, [])
  
  // Everytime location changes tries to fetch the data
  useEffect(() => {
    const handleFetchData = async () => {
      const [, id, path] = location.pathname.split('/')

      try {
        setData(await fetchData(path, id))
      } catch (error) {
        setData({ _type: 'error', content: '404' })
      }
    }

    handleFetchData()
  }, [location])

  return [
    data, randomSongs
  ]
}

export default useDataResource