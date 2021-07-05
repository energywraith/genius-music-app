import React from "react"
import { Container, Iframe } from './YoutubeEmbed.style'

const getEmbedId = (url) => {
  return url.split('=')[1]
}

const YoutubeEmbed = ({ url }) => (
  <Container>
    <Iframe
      src={`https://www.youtube.com/embed/${getEmbedId(url)}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </Container>
)

export default YoutubeEmbed;