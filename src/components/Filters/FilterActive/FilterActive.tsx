import { ChangeEvent, useState } from "react";
import Calendar from "../../Calendar/Calendar";
import { Button } from "../../UI/buttons/Button";
import Checkbox from "../../UI/checkbox/Checkbox";
import s from "./filter.module.scss";
import "./filter.scss";

const categories = [{ id: 1, value: 'Категория 1' }, { id: 2, value: 'Категория 2' }, { id: 3, value: 'Категория 3' }, { id: 4, value: 'Категория 4' }, { id: 5, value: 'Категория 5', }, { id: 6, value: 'Категория 6' }];
const radiuses = [{ id: '1km', value: '1 км' }, { id: '3km', value: '3 км' }, { id: '5km', value: '5 км' }];
const COLUMN_NUMBER = 2;


const FilterMap = () => {
  const middle = Math.ceil(categories.length / COLUMN_NUMBER);
  const [filterState, setFilter] = useState({ category: [categories[0].value], radius: radiuses[0].value, });

  const isMobile = window.innerWidth <= 768;
  const submit = () => {

  }

  const handleCheckboxClick = (evt: ChangeEvent<HTMLInputElement>) => {
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

  return <div className={s.wrapper}>
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

    <Button label="Применить" variant="text" theme="dark" type="submit" extraClass={s.ml_auto + " " + s.margin_top_10} onClick={submit} />
  </div>
}

export default FilterMap;