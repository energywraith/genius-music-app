import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <a href='https://github.com/energywraith' rel='noreferrer'>
        Adam Jalocha/daysin
      </a>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  margin-top: 5em;

  & > a {
    display: flex;
    justify-content: center;
    font-size: 0.9em;
    color: #b3b3b3;
    width: 100%;
    padding: 1em 0;

    &:hover {
      color: white;
    }
  }

  @media(max-width: 1000px) {
    margin-top: 3em;
  }
`

export default Footer