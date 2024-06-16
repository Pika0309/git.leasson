import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
          <div className={s.content}>
              <img src='https://masterpiecer-images.s3.yandex.net/df0c6044571f11ee8131aaafe6635749:upscaled'/>
              {props.message}
              <div className={s.item}>
                  <span>like </span>
                  {props.span}
              </div>
          </div>

    )
}

export default Post;