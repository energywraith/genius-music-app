const geniusRouter = require('express').Router()
const axios = require("axios")
const extractLyrics = require('../utils/extractLyrics')
const getRandomInt = require('../utils/getRandomInt')

// GET search result from genius API
geniusRouter.get('/search/:name', async (request, response) => {
  // EncodeURI to make it work with accented characters
  const searchValue = encodeURI(request.params.name)
  const url = 'https://genius.com/api/search'

  try {
    const [songs, artists, albums] = await Promise.all([
      axios.get(`${url}?q=${searchValue}`),
      axios.get(`${url}/artist?q=${searchValue}`),
      axios.get(`${url}/album?q=${searchValue}`)
    ])

    const endResult = {
      songs: songs.data.response.hits,
      artists: artists.data.response.sections[0].hits,
      albums: albums.data.response.sections[0].hits
    }

    response.json(endResult)
  } catch (error) {
    console.log(error)
  }
})

// GET song data and lyrics
geniusRouter.get('/song/:id', async (request, response) => {
  const id = request.params.id
  const url = `https://genius.com/api/songs/${id}`

  try {
    const [songData, lyrics] = await Promise.all([
      axios.get(url), 
      extractLyrics(`https://genius.com/songs/${id}`)
    ])
    
    const completeData = songData.data.response.song

    try {
      const tracks = await axios.get(`https://genius.com/api/albums/${completeData.album.id}/tracks`)
      completeData.album.tracks = tracks.data.response.tracks
    } catch {
      completeData.album = null
    }

    response.status(200).json({ ...completeData, lyrics })
  } catch (error) {
    response.sendStatus(404)
  }
})

// GET artist data
geniusRouter.get('/artist/:id', async (request, response) => {
  const id = request.params.id
  const url = `https://genius.com/api/artists/${id}`

  try {
    const [artistData, albums] = await Promise.all([
      axios.get(url),
      axios.get(`${url}/albums`)
    ])

    const albumsWithTracks = await Promise.all(albums.data.response.albums.map(async album => {
      try {
        const tracks = await axios.get(`https://genius.com/api/albums/${album.id}/tracks`)
        return { ...album, tracks: tracks.data.response.tracks }
      } catch(err) {
        console.log(err)
      }
    }))

    response.status(200).json({ ...artistData.data.response.artist, albums: albumsWithTracks })
  } catch (error) {
    response.sendStatus(404)
  }
})

// Get album data
geniusRouter.get('/album/:id', async (request, response) => {
  const id = request.params.id
  const url = `https://genius.com/api/albums/${id}`

  try {
    const [album, tracks] = await Promise.all([
      axios.get(url),
      axios.get(`${url}/tracks`)
    ])

    response.status(200).json({
      ...album.data.response.album,
      tracks: tracks.data.response.tracks
    })
  } catch (error) {
    response.sendStatus(404)
  }
})

// Get random songs
geniusRouter.get('/random/:amount', async (request, response) => {
  const amount = request.params.amount
  const url = 'https://genius.com/api/songs'
  const songs = []

  while (songs.length < amount) {
    try {
      const id = getRandomInt(0, 100000)
      const song = await axios.get(`${url}/${id}`)
      songs.push(song.data.response.song)
    } catch (error) {
      // console.log(error)
    }
  }

  response.status(200).json(songs)
})

module.exports = geniusRouter