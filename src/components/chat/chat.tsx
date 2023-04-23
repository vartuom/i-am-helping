import React, {useState} from 'react';
import chat from "./chat.module.scss";
import {Button} from "../../stories/Button";

function Chat () {

    return (
        <div className={chat.container}>
            <div className={chat.info}>
                <img/>
                <div className={chat.wrapper}>

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
