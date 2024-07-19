import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to='/profile' className={s.urlNav}><img src="https://cdn.icon-icons.com/icons2/2943/PNG/512/profile_icon_183946.png" className={s.imgItem}/>Profile</NavLink></div>
            <div className={s.item}><NavLink to='/dialogs' className={s.urlNav}><img src="https://cdn.icon-icons.com/icons2/878/PNG/512/conversation-messages_icon-icons.com_68561.png" className={s.imgItem}/>Messages</NavLink></div>
            <div className={s.item}><NavLink to='/news' className={s.urlNav}><img src="https://cdn.icon-icons.com/icons2/430/PNG/512/news27_42521.png" className={s.imgItem}/>News</NavLink></div>
            <div className={s.item}><NavLink to='/music' className={s.urlNav}><img src="https://cdn.icon-icons.com/icons2/3863/PNG/512/sound_icon_241286.png" className={s.imgItem}/>Music</NavLink></div>
            <div className={s.item}><NavLink to='/settings' className={s.urlNav}><img src="https://cdn.icon-icons.com/icons2/1993/PNG/512/configuration_control_gear_preferences_setting_settings_tools_icon_123195.png" className={s.imgItem}/>Settings</NavLink></div>
        </nav>
    )
}

export default NavBar;