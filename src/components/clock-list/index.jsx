import React from 'react'
import ClockListItem from './clock-list-item'

const ClockList = ({clocks}) => {
  return (
    <div> 
        <h1>i am ClockList</h1>
        
        <hr />

      {clocks.length === 0 ?(
        <p>there no found clock please create clock</p>
      ):(

        <div>
          {clocks.map((clock)=>(
            <ClockListItem clock={clock} key={clock.id}/>

          ))}
        </div>
      )
    
    }
       
    </div>
  )
}

export default ClockList