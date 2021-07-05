import styled from "styled-components"

export const ListContainer = styled.ul`
  display: ${props => props.expanded ? 'flex' : 'none'};  /* default flex */
  flex-direction: column;
  max-height: 23em;
  overflow-y: scroll;
  position: absolute;
  z-index: 2;
  box-shadow: 0px 0px 1px white;
  width: 100%;
  background: #212121;

  & h5 {
    padding: 1em 0.5em;
    font-size: 1em;
    margin: 0;
    font-weight: 400;
    background: #121212;
  }
`