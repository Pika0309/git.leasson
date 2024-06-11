import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <img className={s.obloshka} src='https://kartinki.pics/uploads/posts/2021-07/1626711835_13-kartinkin-com-p-anime-oblozhka-dlya-gruppi-anime-krasivo-17.jpg'/>
            <div>
                <img className={s.ava} src='https://cdn-icons-png.flaticon.com/512/4794/4794936.png'/>
                + descriptions
            </div>

            <div>
                My posts
                <div>
                    New posts
                </div>
                <div className={s.item}> One posts</div>
                <div className={s.item}> Two posts</div>
            </div>
        </div>
    )
}

export default Profile;