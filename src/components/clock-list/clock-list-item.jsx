import { formatDistance} from "date-fns"; 
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-action";
import ClockDisplay from "../shared/clock-display";
// import { useEffect } from "react";
// import { useState } from "react";
import useTimer from "../../hooks/useTimer";

const ClockListItem =({clock,localClock,updateClock , deleteClock})=>{

    const {date} = useClock(clock.timezone,clock.offset);
     const timer = useTimer(date)
    
    
    if(!date || !timer) return null;
   
    // console.log(date);
   return(
        <div>

        <ClockDisplay
            date={timer}
            title={clock.title}
            timezone={clock.timezone}
            offset={clock.offset}
            
        />

        <h3>{formatDistance(localClock,date)}</h3>
        
        <ClockActions
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
        />
        
        
        </div>
       

       
    );

};

export default ClockListItem;