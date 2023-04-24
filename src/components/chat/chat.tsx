import React, {useState} from 'react';
import chat from "./chat.module.scss";
import {Button} from "../../stories/Button";

interface IChatProps {
    person_name: string | null;
    phone: string | null,
    person_img: string,
    messages: string
}

const Chat = ({person_name, phone, person_img}: IChatProps) => {

    // Сделать состояния:

    return (
        <div className={chat.container}>
            <div className={chat.info}>
                <img className={chat.img} src={person_img} alt="foto" />
                <div className={chat.profile}>
                    <h3 className={chat.initials}>{`${person_name}`}</h3>
                    <p className={chat.number}>{phone}</p>
                </div>

                <Button
                    backgroundColor="#FBFDFF"
                    label="Button"
                    onClick={() => {}}
                    size="small"
                />
            </div>
        </div>
    )
}

export default Chat;
