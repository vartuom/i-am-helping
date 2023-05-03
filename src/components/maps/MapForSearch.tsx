import React, { useEffect,  useState } from 'react';
import { Button, Map, Placemark, useYMaps } from '@pbe/react-yandex-maps';
import style from './Maps.module.scss'
import icon from '../../images/location.svg'
import borderIcon from '../../images/locationWithCircle.svg'
import Input from '../ui/Input/Input';
import ymaps, { ISuggestResult, MapEvent } from 'yandex-maps';
import { async } from 'q';
import { element } from 'prop-types';

export const MapForSeacrh = () => {

    const [value, setValue] = useState<string>('')
    const [clickCoord, setClickCoord] = useState<[number, number]>();
    const [suggest, setSuggest] = useState<ISuggestResult[]>([])
    const [mapState, setMapState] = useState<ymaps.IMapState>({center: [55.755864, 37.617698], zoom: 12});

    const options: ymaps.IMapOptions = {suppressMapOpenBlock: true, yandexMapDisablePoiInteractivity: true}


    const YMaps = useYMaps(['geocode','geolocation', 'suggest'])

    let geocode: any
    let location: number[];

    if(YMaps) {
        geocode = YMaps.geocode
        // определение местоположения
        YMaps.geolocation.get().then((res) => {
            const firthResult = res.geoObjects.get(0);
            const coord = firthResult.geometry?.getBounds()
            if (coord && coord[0] !== mapState.center) {
                location = coord[0]
            }
        })
    }

    useEffect(() => {
        // запрос подсказок ДОДЕЛАТЬ НАДО!!!!
        if (value.length > 5 && suggest.find((element) => element.value === value)) {
            YMaps!.suggest(value).then((res: ISuggestResult[])=> {
                setSuggest(res)
                console.log(res)
            })
        }
    }, [YMaps, suggest, value])

    useEffect(()=> {
        // опередение точки с помощью клика ДОДЕЛАТЬ НАДО!!!
        if(clickCoord) {
            geocode(clickCoord).then((res: ymaps.IGeocodeResult)=>{
            const adressDate = res.geoObjects.get(0).properties.get('metaDataProperty', {a: 'Adress'})
            // console.log(adressDate)
            })
        }
    }, [clickCoord, geocode])
    
    return(
        <section className={style.maps}> 
            <div className={style.maps__inputBox}>
                <Input typeInput='adress' value={value} onChange={event=>setValue(event.target.value)}/>
                {
                    (suggest.length > 0) && <ul className={style.maps__ul}>
                        {suggest.map((element, index) => {
                            return (
                                <li key={index} onClick={()=>setValue(element.value)} className={style.maps__li}>
                                    <p>{element.displayName}</p>
                                </li>
                            )
                        })}
                    </ul>
                }
            </div>            
            <Map state={mapState} className={style.maps} onClick={(event: MapEvent )=>setClickCoord(event.get('coords'))} options={options}> 
                {clickCoord && 
                    <Placemark geometry={clickCoord} options={{iconLayout: 'default#image', iconImageSize: [53, 53],  iconImageHref: borderIcon, iconColor: "#FFFFFF"}} className={style.maps__placemark}/>
                }
                <Button data={{image: icon}} options={{ size: 'large' }} onClick={()=>setMapState({center: location, zoom: 17})}/>
            </Map>
        </section>
    )
}