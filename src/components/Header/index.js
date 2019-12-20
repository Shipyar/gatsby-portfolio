import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { AppContext } from '../../context/AppContext';
import {
  StyledHeader,
} from './styles';

import Burger from '../lib/Burger';
import NavigationLinks from './NavigationLinks';

const Header = () => {
  const { state, setMenuOpen } = useContext(AppContext);

  return (
    <StyledHeader>
      <div className="header-container">
        <Link to="/">
          Oliver Abraham
        </Link>
        {!state.isMobile && <NavigationLinks />}
        {state.isMobile && <Burger onClick={e => setMenuOpen(e)} menuOpen={state.menuOpen} />}
      </div>
    </StyledHeader>
  );
}

export default Header;
