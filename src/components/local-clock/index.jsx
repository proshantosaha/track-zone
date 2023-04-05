import React from 'react'
import ClockDisplay from '../shared/clock-display'

const LocalClock = ({date,timezone,offset}) => {
  return (
    <div>
      <ClockDisplay
        date={date}
        title={'my clock'}
        timezone={timezone}
        offset={offset }
       />
        <h1>i am local clock</h1>
    </div>
  )
}

export default LocalClock