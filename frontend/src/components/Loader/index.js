import spinner from './img/spinner.svg'
import { LoaderContainer } from './index.style'

const Loader = () => (
  <LoaderContainer>
    <img src={spinner} alt='loader' />
  </LoaderContainer>
)

export default Loader