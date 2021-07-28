import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { NavLink, useHistory } from 'react-router-dom'
import { useStateValue } from '../../State/StateProvider'
import { auth } from '../../firebase'

function Header() {

  const [{basket, user}, dispatch] = useStateValue();

  const history = useHistory();

  const handleAuthentification = () => {
    if(user){
      auth.signOut();
      history.push('/login')
    }
  }
  return (
    <div className="header">
    <NavLink to='/'>
    <img
      className="header__logo"
      src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/2a17760b-856d-47da-a449-b7ec8584c60b"
      alt=""
    />
    </NavLink>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="search__icon" />
      </div>
      <div className="header__nav">
      <NavLink to={!user && '/login'}>
        <div onClick={handleAuthentification} className="header__option">
          <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </NavLink>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <NavLink to='/checkout'>
        <div className='header__optionBasket'>
          <ShoppingBasketIcon />
          <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
        </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
