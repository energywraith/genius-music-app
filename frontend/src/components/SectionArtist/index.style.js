import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  column-gap: 1em;
  padding-top: 1em;
`

export const Albums = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;

  & > h2 {
    width: 100%;
    margin: 0;
    margin-top: 1em;
  }
`