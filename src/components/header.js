import logo from '../logo.svg';
import './header.css';

import Cart from './cart';

function Header(props) {
  const { cartCounter } = props;

  return(
    <header>
      <img src={logo} className="logo" alt="logo" />
      <Cart cartCounter={ cartCounter } />
    </header>
  );
}

export default Header;