import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogUsers = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialog/" + props.id} className={s.item}>
                {props.name}
            </NavLink>
        </div>
    )
}

const DialogChats = (props) => {

    let dialogData = [
        { id: 1, name: 'Иван Ильин' },
        { id: 2, name: 'Евгений Андреевич' },
        { id: 3, name: 'Евгений Андреевич' },
        { id: 4, name: 'Дмитрий Пенреверзев' },
        { id: 5, name: 'Самит Шойлин' },

    ]

    let DialogElements = dialogData.map(dialogMap => <DialogUsers name={dialogMap.name} id={dialogMap.id} />);

    return (
        <div className={s.dialogItems}>
            {DialogElements}
        </div>
    )
}

export default DialogChats;