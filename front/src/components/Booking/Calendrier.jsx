import React,{useState}from 'react';
import DatePicker from 'react-datepicker';
import DateTimePicker from 'react-datetime-picker';

//css
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Calendrier.module.css';
import {BiHome, BiCalendar} from 'react-icons/bi'


function CustomInput({value,onclick}){
return(
  <div>
  
    <div className='input-group'>
        <input type="text" className='form-control 'value={value} onClick={onClick} readOnly/>
        <div className='input-group-append'></div>
        <span className='input-group-text'></span>
        <BiCalendar/>
    </div>
  </div>
);
}
function Calendrier() {
    const [selectedDate,setDate]= useState(null);
  return (
    <>
    <h4>Date de Réservation</h4>
    <label>
        <DatePicker className={styles.input}
        selected={selectedDate}
        onChange={date=>setDate(date)}
        dateFormat="MM/dd/yyyy"
        showTimeSelect
        timeIntervals={30}
        timeFormat="hh:mm"
        />
          <BiCalendar className={styles.icon}/>
    </label>
    </>
  );
}

export default Calendrier