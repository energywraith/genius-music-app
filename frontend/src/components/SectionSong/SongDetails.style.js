import styled from 'styled-components'
import Description from './Description'
import Album from '../SectionArtist/Album'

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  row-gap: 1em;
  margin-top: 1.5em;
  column-gap: 1em;
  align-items: center;

  @media(max-width: 1000px) {
    width: 100%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  column-gap: 1em;

  @media(max-width: 1000px) {
    flex-direction: column;
    row-gap: 1em;
  }
`

export const Artist = styled.h5`
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 2em;
  margin: 0;
  justify-self: start;
  cursor: pointer;
  color: white;

  @media(max-width: 1000px) {
    text-align: center;
  }
`

export const CoverImage = styled.img`
  flex: auto;
  height: 10em;
  width: auto;
  justify-self: start;
  box-shadow: 0px 0px 1px white;

  @media(max-width: 1000px) {
    width: 100%;
    height: auto;
  }
`

export const DescriptionStyled = styled(Description)`
  width: 50ch;

  @media(max-width: 1000px) {
    min-width: 0ch;
    width: 100%;
    max-width: 100%;
    text-align: center;
  }
`

export const AlbumStyled = styled(Album)`
  width: 100%;
`