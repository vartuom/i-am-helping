import React from 'react';
import { Map, SearchControl } from '@pbe/react-yandex-maps';
import style from './Maps.module.scss'
import icon from '../../images/locationWithCircle.svg'

export const MapForSeacrh = () => {


    const defaultState: ymaps.IMapState  = { center: [55.755864, 37.617698] ,zoom: 12 }



    return(
        <section className={style.maps}> 
            <input type='text' id='suggest'/>
            <Map state={defaultState} className={style.maps} >
            </Map>    
        </section>
    )
}