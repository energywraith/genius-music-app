import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr;
  justify-content: space-between;
  width: 100%;

  @media(max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`

export const Name = styled.h2`
  grid-column: 1/3;
  font-weight: 600;
  justify-self: start;
  margin-top: 1em;
  /* width: fit-content; */
`

export const Lyrics = styled.div`
  white-space: pre-wrap;
  width: fit-content;

  & span {
    color: lightskyblue;
    font-size: 0.9em;
  }
`