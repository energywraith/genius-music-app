import { Link } from 'react-router-dom'
import { NavContainer } from './index.style'
import appLogo from './img/appLogo.png'

const Nav = () => (
  <NavContainer>
    <Link to='/'>
      <img src={appLogo} alt='scuffed spotify' /> Spotifi
    </Link>
  </NavContainer>
)

export default Nav