import { Helmet } from 'react-helmet'
import cat404 from './img/404.webp'
import { Container } from './index.style'

const NotFound = ({ data, children }) => {
  return data && data._type === 'error'
    ? <Container>
        <Helmet>
          <title> Not found :( </title>
        </Helmet>
        
        <img src={cat404} alt='not found' />
        <span> 404 NOT FOUND! </span>
      </Container>

    : children
}

export default NotFound