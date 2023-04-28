import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.scss";

registerLocale('ru', ru);
const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      inline
      locale={ru}
      selected={startDate}
      onChange={(date) => setStartDate(date!)}
      minDate={new Date()}
      dateFormatCalendar='LLLL'
    />
  );
};

export default Calendar;