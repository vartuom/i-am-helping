import React, { useState } from 'react';
import {  ListBox, ListBoxItem, Map, Placemark } from '@pbe/react-yandex-maps';
import style from './Maps.module.scss'
import icon from '../../images/locationWithCircle.svg'

export const Maps = () => {

    const [updatedCoordinates, setUpdatedCoordinates] = useState<[number, number]>([55.755864, 37.617698])

    const defaultState: ymaps.IMapState  = { center: updatedCoordinates ,zoom: 12 }

    const options: ymaps.IMapOptions = {suppressMapOpenBlock: true}

    const aplication = [[55.737397, 37.582600], [55.774456, 37.597090], [55.774456, 37.610409], [55.759439, 37.597090], [55.759439, 37.610409]]

    interface IDataItem {
        content: string,
        coordinate: [number, number]
    }

    const boxItem: IDataItem[] = [{content: 'Mocква' , coordinate: [55.755864, 37.617698]}, {content: 'Санкт-Петербург', coordinate: [59.938955, 30.315644]}]

    return(
        <section className={style.maps}> 
            <Map state={defaultState} className={style.maps} options={options}>
                {aplication && aplication.map((element, index) => {
                    return (
                        <Placemark geometry={element} key={index} options={{iconLayout: 'default#image', iconImageSize: [53, 53],  iconImageHref: icon, iconColor: "#FFFFFF"}} className={style.maps__placemark}/>
                    )
                })}
                    {
                        boxItem && (
                            <ListBox data={{ content: "Выберите город" }}>
                                { boxItem.map((element, index) => {
                                    return (
                                        <ListBoxItem data={element} key={index} onClick={()=>setUpdatedCoordinates(element.coordinate)} defaultOptions={{selectOnClick: false }}/>
                                    )
                                })}
                            </ListBox>  
                        )
                    }
            </Map>    
        </section>
    )
}