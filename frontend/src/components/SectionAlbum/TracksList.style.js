import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1em;

  & > h3 {
    letter-spacing: 1px;
  }

  @media(max-width: 1000px) {
    text-align: center;
  }
`

export const Track = styled.li`
  & > a {
    display: block;
    padding: 1em;
    color: #b3b3b3;

    &:hover {
      background: #212121;
      color: white;
    }
  }
`