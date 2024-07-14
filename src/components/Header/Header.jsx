import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header className={s.header}>
            <NavLink to='/logProfile'>
                <img src='https://cdn-icons-png.flaticon.com/512/187/187902.png'/>
                <label className={s.textLog}>NeverChat's</label>
            </NavLink>
        </header>
    )

}

export default Header;
