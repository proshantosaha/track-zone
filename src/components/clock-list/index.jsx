import React from 'react';
import ClockListItem from './clock-list-item'

const ClockList = ({clocks,updateClock,deleteClock,localClock}) => {
  return (
    <div> 
        <h1>i am ClockList</h1>
        
        <hr />

      {clocks.length === 0 ?(
        <p>there no found clock please create clock</p>
      ):(

        <div>
          {clocks.map((clock)=>(
            <ClockListItem 
            clock={clock} 
            localClock={localClock}
            key={clock.id}
            updateClock={updateClock}
            deleteClock={deleteClock}
            />

          ))}
        </div>
      )
    
    }
       
    </div>
  )
}

export default ClockList