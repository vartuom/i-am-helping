import React, { useState } from 'react';
import {  ListBox, ListBoxItem, Map, Placemark, useYMaps } from '@pbe/react-yandex-maps';
import style from './Maps.module.scss'
import icon from '../../images/locationWithCircle.svg'
import ymaps from 'yandex-maps';

export const Maps = () => {

    const [mapState, setMapState] = useState<ymaps.IMapState>({center: [55.755864, 37.617698], zoom: 12})
    
    const options: ymaps.IMapOptions = {suppressMapOpenBlock: true}

    const aplication = [[55.737397, 37.582600], [55.774456, 37.597090], [55.774456, 37.610409], [55.759439, 37.597090], [55.759439, 37.610409]]

    interface IDataItem {
        content: string,
        request_name: string
    }

    const boxItem: IDataItem[] = [{content: 'Mocква', request_name: 'Moscow'}, {content: 'Санкт-Петербург', request_name: 'Saint-Petersburg'}]

    const YMaps = useYMaps(['geocode'])

    let geocode: any;

    if (YMaps){
        geocode = YMaps.geocode
    }


    const switchCity = (name: string) => {
        geocode(name).then((res: ymaps.IGeocodeResult) => {
                const firthResult = res.geoObjects.get(0);
                const coord = firthResult.geometry?.getBounds()
                if (coord) {
                    setMapState({center: coord[0], zoom: 12})
                }
            })
    } 

    return(
        <section className={style.maps}> 
            <Map state={mapState} className={style.maps} options={options} >
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
                                        <ListBoxItem data={element} key={index} onClick={()=>switchCity(element.request_name)}  defaultOptions={{selectOnClick: false }}/>
                                    )
                                })}
                            </ListBox>  
                        )
                    }
            </Map>    
        </section>
    )
}