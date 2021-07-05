import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const OverviewParagraph = styled.p`
  font-size: 1.3em;
  max-width: 60ch;
  width: fit-content;
  margin: 0;
  row-gap: 1em;

  & > p {
    margin: 0;
    margin-top: 0.5em;
  }
`