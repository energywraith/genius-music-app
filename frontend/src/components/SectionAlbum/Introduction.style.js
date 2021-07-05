import styled from 'styled-components'
import Description from '../SectionSong/Description'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  column-gap: 1em;
  row-gap: 1em;

  @media(max-width: 1000px) {
    grid-template-columns: 1fr;
    justify-content: center;
    text-align: center;
  }
`

export const CoverImage = styled.img`
  width: 15em;
  height: auto;
  box-shadow: 0px 0px 1px white;
  grid-row: 1/4;

  @media(max-width: 1000px) {
    justify-self: center;
    grid-row: 2;
  }
`

export const Name = styled.h3`
  margin: 0;
  letter-spacing: 1px;

  @media(max-width: 1000px) {
    grid-row: 1;
  }
`

export const DescriptionStyled = styled(Description)`
  overflow: hidden;
  max-width: none;

  @media(max-width: 1000px) {
    min-width: 0;
    width: 100%;
  }
`

export const Details = styled.ul`
  display: flex;
  justify-self: center;
  column-gap: 0.5em;

  & > li {
    color: #b3b3b3;

    & > a {
      color: white;
    }
  }
`

export const Divider = styled.li`
  &:before {
    content: '|';
    color: rgba(255, 255, 255, 0.5)
  }
`