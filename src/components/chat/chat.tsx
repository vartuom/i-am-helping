import React, {FC, useState} from 'react';
import chat from "./chat.module.scss";
import {TChatProps} from "./types";

export const Chat: FC<TChatProps> = (item: TChatProps) => {

    // Сделать состояния:

    return (
        <div className={chat.container}>
            <div className={chat.info}>
                <img className={chat.img}/>
                <div className={chat.profile}>
                    <h3 className={chat.initials}>{`${item.person_name}`}</h3>
                    <div className={chat.data}>
                        <p className={chat.number}>Тел:</p>
                        <p className={chat.phone}>{item.phone}</p>
                    </div>

                </div>

                <div className={chat.button}>

                    <div className={chat.buttonClose} />
                    {item.is_approvable && <div className={chat.buttonApprove} />}
                </div>
            </div>
        </div>
    )
}

export default Chat;
