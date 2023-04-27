import React from 'react';
import {  Map, Placemark } from '@pbe/react-yandex-maps';
import style from './Maps.module.scss'

export const Maps = () => {

    const defaultState = { center: [55.755864, 37.617698], zoom: 9 }

    const aplication = [[55.737397, 37.582600], [55.774456, 37.597090], [55.774456, 37.597090], [55.774456, 37.597090], [55.759439, 37.610409]]

    return(
        <>
            <Map defaultState={defaultState} className={style.maps}>
                {aplication && aplication.map((element, index) => {
                    return (
                        <Placemark geometry={element} key={index}/>
                    )
                })}
            </Map>    
        </>
    )
}