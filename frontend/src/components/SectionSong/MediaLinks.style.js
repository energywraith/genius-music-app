import styled from 'styled-components'

export const MediaList = styled.ul`
  display: flex;
  column-gap: 1em;
  width: 100%;
  justify-content: flex-end;
  grid-column: 1/3;

  & li a {
    color: #b3b3b3;
    
    &:hover {
      color: white;
    }
  }

  @media(max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    row-gap: 1em;
  }
`