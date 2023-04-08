import React, { useEffect } from 'react'
import ClockDisplay from '../shared/clock-display'
import ClockActions from '../shared/clock-action'
import useClock from '../../hooks/useClock';

const LocalClock = ({clock,updateClock}) => {
  const {date,timezone,offset,} = useClock(clock.timezone, clock.offset);

  useEffect(()=>{
    updateClock({
      date,
      timezone,
      offset,
    });
  },[date])

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
      
      
       <ClockActions local={true} clock={clock}/>
        <h1>i am local clock</h1>
    </div>
  )
}

export default LocalClock