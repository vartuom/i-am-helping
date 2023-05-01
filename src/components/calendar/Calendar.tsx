import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.scss";

interface ICalendar {
  selectedDate: Date,
  onChange: (e: Date) => void
}

registerLocale('ru', ru);
const Calendar = ({selectedDate, onChange}: ICalendar) => {
  const [startDate, setStartDate] = useState(selectedDate || new Date());
  return (
    <DatePicker
      inline
      locale={ru}
      selected={startDate}
      onChange={(date) => {setStartDate(date!); onChange(date!)}}
      minDate={new Date()}
      dateFormatCalendar='LLLL'
    />
  );
};

export default Calendar;