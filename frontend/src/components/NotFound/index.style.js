import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1em;

  & > img {
    height: 25em;
    width: auto;
  }

  & > span {
    font-size: 2em;
  }
`