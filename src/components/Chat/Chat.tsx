import React, {FC, useState} from 'react';
import chat from "./Chat.module.scss";
import {TChatProps} from "./types";
import {Button} from "../UI/Buttons/Button";
import { ClipIcon, CrossIcon, SendIcon } from '../UI/Icons/icons';

type Message = {
    text: string;
    file?: File | null;
};

export const Chat: FC<TChatProps> = (item: TChatProps, props) => {
    const { name, avatar, phone } = props;

    // Сделать состояния:
    const [value, setValue] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [fileInputValue, setFileInputValue] = useState<string>('');
    const [isChatOpen, setIsChatOpen] = useState(true);

    //Ввод в инпут чата
    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value);
    };

    //Функция для изменения прикрепляемого файла
    const handleFileInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        if (evt.target.files) {
            setFileInputValue(evt.target.files[0].name);
        }
    };

    const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (value.trim() !== '') {
            const newMessage: Message = {
                text: value,
                file: null,
            };

            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setValue('');
            setFileInputValue('');
        }
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
                <div className={chat.info} onClick={handleChatClose}>
                    {/*<FormsHeader name={name} avatar={avatar} phone={phone} />*/}
                    <img className={chat.img} />
                    <div className={chat.profile}>
                        <h3 className={chat.initials}>{`${item.person_name}`}</h3>
                        <div className={chat.data}>
                            <p className={chat.number}>Тел:</p>
                            <p className={chat.phone}>{item.phone}</p>
                        </div>
                    </div>
                    <div className={chat.button}>
                        <Button
                            figure="close"
                            type="button"
                            icon={<CrossIcon type="white" />}
                        />
                    </div>
                </div>
                <div className={chat.chat}>
                    {messages.map((message, index) => (
                        <div key={index} className={chat.messagesContainer}>
                            <div key={index} className={chat.message}>
                                <img className={chat.imgI} />
                                <div key={index} className={chat.containerTexts}>
                                    <p className={chat.texts}>{message.text}</p>
                                    {message.file && (
                                        <div className={chat.file}>
                                            <a href={URL.createObjectURL(message.file)}>{message.file.name}</a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <form className={chat.form} onSubmit={handleSendMessage} >
                    <div className={chat.input}>
                        <input
                            className={chat.text}
                            type="text"
                            value={value}
                            placeholder="Напишите сообщение..."
                            onChange={handleInputChange}
                        />
                        <Button
                            variant="icon"
                            theme="dark"
                            type="button"
                            icon={<ClipIcon type="blue" />}
                            extraClass={chat.clipIcon}
                        />
                    </div>

                    <Button
                        variant="icon"
                        theme="dark"
                        type="button"
                        icon={
                            <SendIcon type='white'/>}
                        extraClass={chat.sendIcon}
                    />

                </form>
            </div>
        </div>

    )
}

export default Chat;
