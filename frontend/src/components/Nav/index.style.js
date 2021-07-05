import styled from 'styled-components'

export const NavContainer = styled.nav`
  width: 100%;
  cursor: pointer;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.2em;
    color: white;
    padding: 1em 0;

    & > img {
      height: 2em;
      width: auto;
    }
  }
`