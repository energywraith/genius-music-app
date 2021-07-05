import styled from 'styled-components'

export const RandomSongsList = styled.ul`
  & li {
    cursor: pointer;
    width: fit-content;
    height: 100%;

    & a {
      color: #b3b3b3;

      &:hover {
        color: white;
      }
    }
  }
`