import {useEffect, useState} from 'react';

import {addMinutes} from "date-fns"
import {TIMEZONE_OFFSET} from '../constants/timeZone'


const useClock = (timezone,offset) => {
  const [localDate,setLocalDate] = useState(null);
  const [localOffset, setLocalOffset] = useState(0)
  const [localTimeZone, setlocalTimeZone] = useState('')
  const [utc, setUTC] = useState(null)

   useEffect(()=>{
    let d = new Date()
    const lo  = d.getTimezoneOffset();
    d = addMinutes(d,lo);
  
    setUTC(d);

    setLocalOffset(lo)
   },[]);

  useEffect(()=>{
    if(utc !== null){
      if(timezone){
        offset = 
        ((timezone!=='UTC' ||timezone!=='GMT')&&
        TIMEZONE_OFFSET[timezone]) ?? 
        offset;
        
        const newUtc = addMinutes(utc, offset);
       setLocalDate(newUtc)
      //  find time zone
      }
      else{
        const newUtc = addMinutes(utc,-localOffset);
        const dateStrArr = newUtc.toUTCString().split(' ');
        // console.log(dateStrArr);
       setLocalDate(newUtc);
       setlocalTimeZone(dateStrArr.pop());

      //  find timezone
      }
     
     
    }
   
  },[utc,timezone,offset]);



  return{
   date:localDate,
   dateUtc:utc,
   offset: offset || -localOffset,
   timezone:timezone || localTimeZone,
  }
 
}

export default useClock