import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../../shared/components/Backdrop/Backdrop';
const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

 const setDrawerHandler = ()=>{
   setDrawerIsOpen(prevState => !prevState)
 }
 
  return (
    <>
    {drawerIsOpen && <Backdrop onClick={setDrawerHandler}/>}
      {drawerIsOpen && (
        <SideDrawer >
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader >
        <button onClick={setDrawerHandler} className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Place</Link>{' '}
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
