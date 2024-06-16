import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <img className={s.obloshka} src='https://kartinki.pics/uploads/posts/2021-07/1626711835_13-kartinkin-com-p-anime-oblozhka-dlya-gruppi-anime-krasivo-17.jpg'/>
            <div>
                <img className={s.ava} src='https://cdn-icons-png.flaticon.com/512/4794/4794936.png'/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;