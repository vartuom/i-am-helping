import React, {FC, useEffect, useRef, useState} from 'react';
import chat from "./chat.module.scss";
import {TChatProps} from "./types";
import {CrossIcon} from "../ui/icons/cross-icon/cross-icon";
import useAutosizeTextArea from "../../hooks/useAutosizeTextArea";
import {SendIcon} from "../ui/icons/send-icon/send-icon";
import {AddIcon} from "../ui/icons/add-icon/add-icon";
import {ClipIcon} from "../ui/icons/clip-icon/clip-icon";

export const Chat: FC<TChatProps> = (item: TChatProps) => {

    // Сделать состояния:
    const [messages, setMessages] = useState([]);
    const [fileInputValue, setFileInputValue] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(true);
    const [value, setValue] = useState("");


    const handleSendMessage = (evt: React.MouseEvent<HTMLDivElement>) => {
        evt.preventDefault();
        if (value ) {
            const newMessage = {
                text: value,
                file: fileInputValue
            };
            setMessages([...messages, newMessage]);
            setValue('');
            setFileInputValue('');
        }
    };

    //Ввод в инпут чата
    const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(evt.target.value);
    };

    //Функция для изменения прикрепляемого файла
    const handleFileInputChange = (evt: React.MouseEvent<HTMLDivElement>) => {
        setFileInputValue(evt.target.value);
    };

    // Закрытие чата
    const handleChatClose = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsChatOpen(false);
    };

    if (!isChatOpen) {
        return null;
    }

    return (
        <div className={chat.main}>
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
                    <div className={chat.buttonClose} onClick={handleChatClose}>
                        <CrossIcon className={chat.ico} type='white' />
                    </div>
                </div>
                </div>
            <div className={chat.chat}>

                {messages.map((message, index) => (
                <div  key={index} className={chat.messagesContainer}>

                    <div className={chat.message}>
                    <img className={chat.imgI}/>

                            <div className={chat.containerTexts}>
                                {message.text &&
                                <p className={chat.texts}>{message.text}</p>}
                            </div>

                    </div>
                    {message.file && (
                        <div className="chat-file">
                            <a href={message.file}>{message.file}</a>
                        </div>
                    )}
                </div>
                ))}
            </div>
                <form className={chat.form} onClick={handleSendMessage}>
                <div className={chat.textarea}>
                        <textarea
                            className={chat.text}
                            placeholder="Напишите сообщение"
                            onChange={handleChange}
                            value={value}
                        />
                    <label htmlFor="file-input" className={chat.containerClipIcon}>
                        {/*<ClipIcon className={chat.clipIcon} type='blue'/>*/}
                        <ClipIcon
                            className={chat.clipIcon}
                            id="file-input"
                            type="file"
                            accept="image/*, .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx"
                        />
                    </label>



                    <div className={chat.buttonSend}>
                        <div className={chat.send}>
                            <SendIcon className={chat.sendIcon} type='white'/>
                        </div>
                    </div>

                 </div>
                </form>
            </div>
        </div>

    )
}

export default Chat;
