import { Header, CoverImage, DescriptionStyled } from "./Introduction.style"

const Introduction = ({ artist }) => {
  return (
    <Header>
      <CoverImage src={artist.image_url} alt={artist.name} />
      <h1> {artist.name} </h1>
      <DescriptionStyled content={artist.description_preview} />
    </Header>
  )
}

export default Introduction

