import React from 'react';
import { Link } from 'react-scroll';
import cl from '../navbar.module.css'
const MyLink = ({ to, value }) => {
    const scrollWithOffset = (el, offset) => {
        window.scroll({
            top: el.offsetTop - offset,
            left: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div>
            <Link
                className={cl.navItem}
                activeClass='active'
                to={to}
                spy={true}
                smooth={true}
                scroll={(el) => scrollWithOffset(el, 75)}
                duration={500}
            >
                {value}
            </Link>
        </div>
    );
};

export default MyLink;
