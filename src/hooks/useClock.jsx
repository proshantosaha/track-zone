import {useEffect, useState} from 'react';

import {addMinutes} from "date-fns"


// const init = {
//   id : '',
//   title:'',
//   timezone:{
//     type:'',
//     offset:'',
//   },
//   date_utc  :null,
//   date:null
// };

const TIMEZONE_OFFSET = {
  PST: -7 * 60, 
  EST: -4 * 60,
  EDT: -4 * 60,
  BST: 1 * 60,
  MST: -6 * 60,
}
const useClock = (timezone,offset = 0) => {
  // const [state,useState] = useState({...init});
  const [localDate,setLocalDate] = useState(null);
  const [localOffset, setLocalOffset] = useState(0)
  const [localTimeZone, setlocalTimeZone] = useState('')
  const [utc, setUTC] = useState(null)

   useEffect(()=>{
    let d = new Date()
    const lo  = d.getTimezoneOffset();
    d = addMinutes(d,lo);
    // console.log(d.toLocaleString());
  
    setUTC(d);

    setLocalOffset(lo)
   },[]);

  useEffect(()=>{
    if(utc !== null){
      if(timezone){
        offset = TIMEZONE_OFFSET[timezone] ?? offset
        const newUTC = addMinutes(utc, offset);
       setLocalDate(newUTC)
      //  find time zone
      }
      else{
        const newUTC = addMinutes(utc, -localOffset);
        const dateStrArr = newUTC.toUTCString().split('')
       
     
       setLocalDate(newUTC)
       setlocalTimeZone(dateStrArr.pop());

      //  find timezone
      }
     
     
    }
   
  },[utc]);



  return{
   date:localDate,
   dateUtc:utc,
   offset,
   timezone,
   localOffset,
   localTimeZone
  }
 
}

export default useClock