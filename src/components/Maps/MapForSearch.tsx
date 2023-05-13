import React, { useState } from "react";
import { Button, Map, Placemark, useYMaps } from "@pbe/react-yandex-maps";
import style from "./Maps.module.scss";
import icon from "../../images/location.svg";
import borderIcon from "../../images/locationWithCircle.svg";
import Input from "../ui/Input/Input";
import ymaps, { ISuggestResult, MapEvent } from "yandex-maps";

export const MapForSeacrh = (props: {
  value: string;
  setValue: (value: string) => void;
}) => {
  const { value, setValue } = props;
  const [clickCoord, setClickCoord] = useState<[number, number]>();
  const [suggest, setSuggest] = useState<ISuggestResult[]>([]);
  const [viewSuggest, setViewSuggest] = useState<boolean>(false);
  const [mapState, setMapState] = useState<ymaps.IMapState>({
    center: [55.755864, 37.617698],
    zoom: 12,
  });

  const options: ymaps.IMapOptions = {
    suppressMapOpenBlock: true,
    yandexMapDisablePoiInteractivity: true,
  };

  const YMaps = useYMaps(["geocode", "geolocation", "suggest"]);

  let location: number[];

  const geocode = YMaps?.geocode;

  // все реализованно через функции для уменьшения запросов к апишке, ибо они очень быстро кончаются.

  // запрос подсказок для адреса
  const workWithSuggest = (inputValue: string) => {
    setValue(inputValue);
    if (value.length > 5) {
      YMaps!.suggest(value).then((res: ISuggestResult[]) => {
        setViewSuggest(true);
        setSuggest(res);
        console.log(res);
      });
    }
  };

  // изменения видимости списка при нажатии на подсказку,
  const cliclForSuggest = (str: string) => {
    setValue(str);
    setViewSuggest(false);
  };

  // определение местоположения. Работает, но не очень точно!!!
  const locateMe = () => {
    YMaps &&
      YMaps.geolocation.get().then((res) => {
        const firthResult = res.geoObjects.get(0);
        const coord = firthResult.geometry?.getBounds();
        if (coord && coord[0] !== mapState.center) {
          location = coord[0];
        }
      });
    setMapState({ center: location, zoom: 17 });
  };

  // определение координат по клику. РАБОТАЕТ!!!
  const clickForMap = (event: MapEvent) => {
    setClickCoord(event.get("coords"));
    geocode && geocode(event.get("coords")).then((res: ymaps.IGeocodeResult) => {
      const adressDate = res.geoObjects.get(0).properties.get("text", {});
      setValue(String(adressDate));
    });
  };

  return (
    <section className={style.maps}>
      <div className={style.maps__inputBox}>
        <Input
          typeInput="adress"
          value={value}
          onChange={(event) => workWithSuggest(event.target.value)}
        />
        {suggest.length > 0 && viewSuggest && (
          <ul className={style.maps__ul}>
            {suggest.map((element, index) => {
              return (
                <li
                  key={index}
                  onClick={() => cliclForSuggest(element.value)}
                  className={style.maps__li}
                >
                  <p>{element.displayName}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <Map
        state={mapState}
        className={style.maps}
        onClick={(event: MapEvent) => clickForMap(event)}
        options={options}
      >
        {clickCoord && (
          <Placemark
            geometry={clickCoord}
            options={{
              iconLayout: "default#image",
              iconImageSize: [53, 53],
              iconImageHref: borderIcon,
              iconColor: "#FFFFFF",
            }}
            className={style.maps__placemark}
          />
        )}
        <Button
          data={{ image: icon }}
          options={{ size: "large" }}
          onClick={() => locateMe()}
        />
      </Map>
    </section>
  );
};
