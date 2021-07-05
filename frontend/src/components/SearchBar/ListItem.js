import { Link } from 'react-router-dom';
import { Container, Thumbnail } from './ListItem.style';
import placeholderImg from './img/placeholder.png'

const ListItem = ({ id, thumbnail, title, type, setExpanded }) => {
  // event.preventDefault() on 'onMouseDown' prevents 'onBlur' which usually happens before 'onClick' event
  // by that I can use 'onClick' on that element and 'Link' component works
  return (
    <Container
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => setExpanded(false)}
    >
      <Link to={`/${type}/${id}`}>
        <Thumbnail
          src={thumbnail}
          onError={(e)=> { e.target.onerror = null; e.target.src = placeholderImg }} // Still returns 404 error if img url is invalid !!!
          alt={`thumbnail`}
        />
        <span> {title} </span>
      </Link>
    </Container>
  )
}

export default ListItem