import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  padding: 0em 0;

  & > h2 {
    margin: 0;
    padding: 1em 0;
  }
  
  & > input {
    width: 100%;
    height: 1em;
    font-size: 1em;
    padding: 1.2em 0.5em;
    box-sizing: border-box;
    border: 0;

    filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.5));
    background: #212121;
    color: white;
    font-family: Rubik;
    /* border-radius: 4px; */

    &:focus {
      outline: none;
    }
  }
`