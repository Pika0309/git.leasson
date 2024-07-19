import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={s.imagge}>
            <img className={s.obloshka} src='https://kartinki.pics/uploads/posts/2021-07/1626711835_13-kartinkin-com-p-anime-oblozhka-dlya-gruppi-anime-krasivo-17.jpg' />
            <img className={s.ava} src='https://cdn-icons-png.flaticon.com/512/4794/4794936.png' />
            <p className={s.backAva}></p>
        </div>
    )
}

export default ProfileInfo;