import { MediaList } from './MediaLinks.style'

const MediaLinks = ({ mediaLinks }) => {
  return (
    <MediaList>
      {mediaLinks.map(link => 
        <li key={link.provider}>
          <a href={link.url} rel="noopener noreferrer">
            {link.provider}
          </a>
        </li>
      )}
    </MediaList>
  )
}

export default MediaLinks