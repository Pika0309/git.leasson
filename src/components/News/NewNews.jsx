import React from "react";
import s from './News.module.css'

const NewNews = (props) => {
    return (
        <div className={s.news}>
            {props.new}
            <div>
                <button className={s.btnLike}>like</button>
                {props.like}
            </div>
        </div>
    )
}

const News = (props) => {

    let newsData = [
        { id: 1, new: "Срочные новости из Владивостока, осёл вышел на прогулку после чего затерялся на 3 недели....", like: 1231 },
        { id: 2, new: "В Москве с 27 июля начинается глобальное потепление, уровень жары составит свыше 35C....", like: 243 },
        { id: 3, new: "Две обезьяны сбежали из Белгородского зоопарка, их....", like: 547 },
        { id: 4, new: "Обновили чарт....", like: 758 },
        { id: 5, new: "Георгий Лепс выпустил новый альбом в честь....", like: 375 },
    ]

    let NewsElements = newsData.map(newsMap => <NewNews new={newsMap.new} id={newsMap.id} like={newsMap.like} />)

    return (
        <div>
            <div className={s.newsCount}>
                <div className={s.item}>
                    {NewsElements}
                </div>
            </div>
        </div>
    )
}

export default News;