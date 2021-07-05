import styled from 'styled-components'

export const AlbumContainer = styled.li`
  display: flex;
  background: #212121;
  box-shadow: 0px 0px 1px white;

  @media(max-width: 1000px) {
    flex-direction: column;
    text-align: center;
  }
`

export const AlbumCover = styled.img`
  width: 10em;
  height: auto;
  padding: 1em;
  justify-self: center;
  align-self: start;

  @media(max-width: 1000px) {
    align-self: center;
  }
`

export const AlbumContent = styled.div`
  padding: 1em 0;
`

export const AlbumName = styled.h3`
  margin: 0;
  padding-bottom: 1em;
  letter-spacing: 1px;
  font-size: 1em;
  color: white;
`

export const TracksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  & > span > a {
    font-size: 0.8em;
    color: white;
  }
`

export const Track = styled.li`
  font-size: 0.8em;
  cursor: pointer;
  
  & > a {
    color: #b3b3b3;
  }

  &:hover > a {
    color: white;
  }
`