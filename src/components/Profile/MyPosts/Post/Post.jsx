import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    
    return (
          <div className={s.content}>
              <img src='https://masterpiecer-images.s3.yandex.net/df0c6044571f11ee8131aaafe6635749:upscaled'/>
              {props.newPosts}
              <div className={s.item}>
                  <button className={s.bntLicke}>like </button>
                  {props.span}
              </div>
          </div>

    )

}

export default Post;