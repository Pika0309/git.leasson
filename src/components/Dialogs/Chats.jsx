import React from "react";
import s from './Chats.module.css'
import ChatsMessages from "./MessagesChats/MessagesChats";
import DialogChats from "./Dialogs/Dialogs";

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <DialogChats />
            <ChatsMessages />
        </div>
    )
}

export default Dialogs;