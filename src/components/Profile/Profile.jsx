import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className={s.contentProfile}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile;