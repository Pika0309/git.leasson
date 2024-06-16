import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                My posts
                <div className={s.addPost}>
                    <textarea></textarea>
                    <div>
                        <button>Add posts</button>
                    </div>
                </div>
                <Post message='Привет, это мой первый props!'
                      span='23'/>
                <Post message='Как у тебя дела?'
                      span='43'/>
                <Post message='А здесь ещё один props'
                      span='127'/>
                <Post message='Попробуем все таки создать ещё один.'
                      span='22'/>
            </div>
    )
}

export default MyPosts;