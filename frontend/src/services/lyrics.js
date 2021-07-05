import axios from 'axios'
// const baseUrl = '/api'
const baseUrl = '/api'

export const search = async name => {
  const response = await axios.get(`${baseUrl}/search/${name}`)
  return response.data
}

export const getSongData = async id => {
  const response = await axios.get(`${baseUrl}/song/${id}`)

  if (response.status === 200) {
    return response.data
  } else {
    return Promise.reject('error 404')
  }
}

export const getAlbumData = async id => {
  const response = await axios.get(`${baseUrl}/album/${id}`)

  if (response.status === 200) {
    return response.data
  } else {
    return Promise.reject('error 404')
  }
}

export const getArtistData = async id => {
  const response = await axios.get(`${baseUrl}/artist/${id}`)

  if (response.status === 200) {
    return response.data
  } else {
    return Promise.reject('error 404')
  }
}

export const getRandomSongs = async amount => {
  const response = await axios.get(`${baseUrl}/random/${amount}`)

  if (response.status === 200) {
    return response.data
  } else {
    return Promise.reject('error 404')
  }
}