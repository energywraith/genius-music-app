import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    background: #121212;
    color: white;
    overflow-y: scroll;
  }

  & a {
    text-decoration: none;
    color: black;
  }

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyles