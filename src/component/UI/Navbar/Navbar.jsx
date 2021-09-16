import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as GlobalLink } from 'react-router-dom';
import classes from './navbar.module.css';
import MyLink from './Link/MyLink';
const Navbar = () => {
    return (
        <header className={classes.navbar}>
            <GlobalLink className={classes.firstNavItem} to='/start'>
                Your Logo
            </GlobalLink>
            <div className={classes.navItems}>
                <MyLink to={'/#home'} value={'Home'}></MyLink>
                <MyLink to={'/#about'} value={'About'}></MyLink>
                <MyLink to={'/#servicing'} value={'Servicing'}></MyLink>
                <MyLink to={'/#portfolio'} value={'Portfolio'}></MyLink>
                <MyLink to={'/#blog'} value={'Blog'}></MyLink>
                <MyLink to={'/#contact-us'} value={'Contact us'}></MyLink>
                <GlobalLink className={classes.navItem} to='/authorization'>
                    Log in
                </GlobalLink>
            </div>
        </header>
    );
};

export default Navbar;
