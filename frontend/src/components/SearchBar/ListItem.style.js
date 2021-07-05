import styled from "styled-components"

export const Container = styled.li`
  & > a {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1em;
    box-shadow: 0px 0px 1px black;
    padding: 0em;
    cursor: pointer;
    color: white;

    &:hover {
      background: #141414;
    }
  }
`

export const Thumbnail = styled.img`
  height: 5em;
  width: 5em;
  object-fit: cover;
`