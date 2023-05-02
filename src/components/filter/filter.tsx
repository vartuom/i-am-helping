import {ChangeEvent, useState} from "react";
import Calendar from "../calendar/Calendar";
import { Button } from "../ui/buttons/Button";
import Checkbox from "../ui/checkbox/checkbox";
import s from "./filter.module.scss";
import "./filter.scss";

const categories = [{ id: 1, value: 'Категория 1' }, { id: 2, value: 'Категория 2' }, { id: 3, value: 'Категория 3' }, { id: 4, value: 'Категория 4' }, { id: 5, value: 'Категория 5', }, { id: 6, value: 'Категория 6' }];
const radiuses = [{ id: '1km', value: '1 км' }, { id: '3km', value: '3 км' }, { id: '5km', value: '5 км' }];
const COLUMN_NUMBER = 2;


const Filter = () => {
  const middle = Math.ceil(categories.length / COLUMN_NUMBER);
  const [filterState, setFilter] = useState({ category: [categories[0].value], radius: radiuses[0].value, time: null, date: new Date() });
  const [fullScreenCalendar, setFullScreenCalendar] = useState(false);

  const dateOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const isMobile = window.innerWidth <= 768;
  const submit = () => {

  }

  const handleCheckboxClick = (evt:  ChangeEvent<HTMLInputElement>) => {
    evt.stopPropagation();
    const array = filterState.category;
    if (array.indexOf(evt.target.name) < 0) {
      array.push(evt.target.name);
      setFilter({ ...filterState, category: array });
    }
    else {
      setFilter({ ...filterState, category: array.filter(value => value !== evt.target.name) });
    }
  }

  const FullScreenCalendar = () => {
    return <div className="fullscreen">
      <div className={s.h1+ ' '+s.border}>Дата</div>
      <Calendar selectedDate={filterState.date} onChange={(e) => setFilter({ ...filterState, date: e })} />
      <Button label="Применить" variant="text" theme="dark" type="submit" extraClass={s.margin_auto + ' ' + s.margin_top_10} onClick={() => setFullScreenCalendar(false)} />
    </div>
  }

  return <div className={s.wrapper}>
    {fullScreenCalendar ? <FullScreenCalendar />
      : <>
        <div className={s.subtitle}>Категория</div>
        <div className={s.d_flex}>
          <ul className={s.d_flex + ' ' + s.column}>
            {!!categories.length && categories.map((el, i) => {
              if (i < middle)
                return <li className={s.check_padding} key={el.id}><Checkbox name={el.value} label={el.value} handleChange={handleCheckboxClick} isChecked={filterState.category.indexOf(el.value) >= 0} /></li>
            })}
          </ul>
          <ul className={s.d_flex + ' ' + s.column}>
            {categories.length > 1 && categories.map((el, i) => {
              if (i >= middle)
                return <li className={s.check_padding} key={el.id}><Checkbox name={el.value} label={el.value} handleChange={handleCheckboxClick} isChecked={filterState.category.indexOf(el.value) >= 0} /></li>
            })}
          </ul>
        </div>
        <div className={s.subtitle + ' ' + s.margin_top_20}>Радиус поиска</div>
        <div className={s.d_flex}>
          {!!radiuses.length && radiuses.map(el => {
            return <div className={s.filter_radius} key={el.id}><Button label={el.value} variant="text" theme={el.value == filterState.radius ? 'dark' : 'light'} type="button" extraClass={s.radius_button} onClick={() => setFilter({ ...filterState, radius: el.value })} /></div>
          })}
        </div>
        <div className={s.subtitle + ' ' + s.margin_top_20}>Дата и время</div>

        <div className={s.label}>Время</div>
        <div className={s.label}>Дата</div>
        {isMobile
          ? <div className={s.style_date} onClick={() => setFullScreenCalendar(true)}>{filterState.date.toLocaleDateString('ru-RU', dateOptions)}</div>
          : <Calendar selectedDate={filterState.date} onChange={(e) => setFilter({ ...filterState, date: e })} />}
        <Button label="Применить" variant="text" theme="dark" type="submit" extraClass={s.ml_auto + " " + s.margin_top_10} onClick={submit} />
      </>
    }
  </div>
}

export default Filter;