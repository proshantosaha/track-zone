import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-action";
import ClockDisplay from "../shared/clock-display";

const ClockListItem =({clock,})=>{

    const {date} = useClock(clock.timezone,clock.offset);
    
    if(!date) return null;
    // console.log(date);
   return(
        <div>

        <ClockDisplay
            date={date}
            title={clock.title}
            timezone={clock.timezone}
            offset={clock.offset}
            
        />


      
        </div>
       

       
    );

};

export default ClockListItem;