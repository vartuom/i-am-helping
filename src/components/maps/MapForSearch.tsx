import React, { useRef, useState } from 'react';
import { Map, useYMaps } from '@pbe/react-yandex-maps';
import style from './Maps.module.scss'
import icon from '../../images/locationWithCircle.svg'
import Input from '../ui/Input/Input';
import ymaps from 'yandex-maps';

export const MapForSeacrh = () => {

    const [value, setValue] = useState<string>('')
    const mapRef = useRef<HTMLDivElement | null>(null)

    const defaultState: ymaps.IMapState  = { center: [55.755864, 37.617698] ,zoom: 12 }

    const YMaps = useYMaps(['geocode'])
    console.log(YMaps)

    if (YMaps) {
    }
  
    return(
        <section className={style.maps}> 
            <Input typeInput='adress' value={value} onChange={event=>setValue(event.target.value)}/>
            <div id='list' ref={mapRef} style={{width: "100vw", height:"100vh"}}></div>
            <Map state={defaultState} className={style.maps} />
        </section>
    )
}