import styled from 'styled-components'

export const RandomSongsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;

  & li {
    cursor: pointer;
    width: fit-content;

    & a {
      color: #b3b3b3;

      &:hover {
        color: white;
      }
    }
  }

  & > button {
    width: fit-content;
    margin-top: 1.5em;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    color: lightblue;

    &:hover {
      color: #72bcd4;
    }
  }
`