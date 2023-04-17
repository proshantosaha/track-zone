import React, { useEffect } from 'react'
import ClockDisplay from '../shared/clock-display'
import ClockActions from '../shared/clock-action'
import useClock from '../../hooks/useClock';

const LocalClock = ({clock,updateClock,createClock}) => {
  const {date,timezone,offset,} = useClock(clock.timezone, clock.offset);

  useEffect(()=>{
    updateClock({
      date,
      timezone,
      offset,
    });
  },[date,])

  // console.log(timezone);

  return (
    <div>
      {date &&(
        <ClockDisplay
        date={date}
        title={clock.title}
        timezone={timezone}
        offset={offset}
      
       />
      )}
      
     
       <ClockActions 
          local={true} 
          clock={clock}
          updateClock={updateClock}
          createClock={createClock} /> 
        <h1>i am local clock</h1>
    </div>
  )
}

export default LocalClock