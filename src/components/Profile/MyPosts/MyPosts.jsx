import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

  let postsData = [
    {id:1, post: 'Срочные новости, в Москве двое приезжих...', span: 22},
    {id:2, post: 'Новая запись будет доступна завтра', span: 46},
    {id:3, post: 'Место из фильма "Завтра в Путь"', span: 127},
    {id:4, post: 'Скоро в примьере...', span: 12},
]

  let PostsElements = postsData .map(postsMap => <Post newPosts={postsMap.post} id={postsMap.id} span={postsMap.span}/>)

  return (
    <div className={s.addPost}>
      <div className={s.item}>
        <textarea></textarea>
        <button className={s.btnAdd}>Add posts</button>
      </div>
      <div className={s.logoPost}>
        <b>My posts</b>
      </div>
      <div className={s.posts}>
        {PostsElements}
      </div>
    </div>
  )
}

export default MyPosts;