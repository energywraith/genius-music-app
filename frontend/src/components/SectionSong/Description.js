import { useState, useEffect } from "react"
import { Container, ReadMoreButton } from "./Description.style"

const Description = ({ content, className }) => {
  const [textToShow, setTextToShow] = useState(content)
  const [extraContent, setExtraContent] = useState('')
  const [extraContentShow, setExtraContentShow] = useState(false)

  useEffect(() => {
    if (textToShow.length > 700) {
      setTextToShow(content.slice(0, 500))
      setExtraContent(content.slice(500, content.length))
    }
  // eslint-disable-next-line
  }, [textToShow])

  return (
    <Container className={className}>
      {textToShow ? textToShow : 'No description added.'}
      {(extraContent.length > 0 && !extraContentShow) &&
        <ReadMoreButton onClick={() => setExtraContentShow(true)}> read more... </ReadMoreButton>
      }
      {extraContentShow &&
        extraContent
      }
    </Container>
  )
}

export default Description