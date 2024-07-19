import React from "react";
import s from './MessagesChats.module.css'

const Message = (props) => {
    return <div className={s.messageItem}>{props.message}</div>
}

const ChatsMessages = (props) => {

    let messagesData = [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Как дела?' },
        { id: 3, message: 'Сегодня ходил покупать строительный материал, делаю дома ремонт.' },
        { id: 4, message: 'Видел сегодня тебя, ты набрал вес, молодец!' },
        { id: 5, message: 'Да, спасибо!' },
        { id: 6, message: 'До скорой встречи!' },
        { id: 7, message: 'Пока.' },
    ]

    let MessagesElements = messagesData.map(messageMap => <Message message={messageMap.message} id={messageMap.id} />)

    return (
        <div className={s.messagesBackground}>
            {MessagesElements}
        </div>
    )

}

export default ChatsMessages;