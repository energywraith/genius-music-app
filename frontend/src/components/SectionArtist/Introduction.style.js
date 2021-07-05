import styled from 'styled-components'
import Description from '../SectionSong/Description'

export const Header = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  gap: 1em;

  & > h1 {
    margin: 0;
  }

  @media(max-width: 1000px) {
    grid-template-columns: 1fr;
    justify-content: center;
    text-align: center;
  }
`

export const DescriptionStyled = styled(Description)`
  align-self: flex-start;
  min-width: 0;
  max-width: none;

  @media(max-width: 1000px) {
    justify-self: center;
  }
`

export const CoverImage = styled.img`
  grid-row: 1/3;
  height: 15em;
  width: auto;
  box-shadow: 0px 0px 1px white;
  justify-self: end;

  @media(max-width: 1000px) {
    justify-self: center;
    grid-row: 2;
  }
`