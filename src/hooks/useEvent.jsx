import shortid from "shortid"

import { useState } from "react"

const useEvents = () =>{
    const [state,setState]  = useState({})

       const getEventsByClockId = (clockId) =>{
         return Object.keys(state).filter((item)=>item.startsWith(clockId));

       
         
       } ;
      
      
      
       const getEvents = (isArray = false) => {
         if(!isArray) return state;
         return Object.values(state);
       };


       const addEvent =(event ) =>{
        event.id = shortid.generate();
        const {id,clockId} = event
        setState(pre=>({

            ...pre,
            [`${event.clockId}|${event.Id}`]:event

        })); 
        return event;
       }

       const deleteEvent = (id) =>{

        const events = {...state};
        delete events[id];
        setState(events);

       }


       const deleteEventByClock = () =>{
        const events = object.keys(state).filter((item)=>
        !item.startsWith(clockId)
        
        )
        setState(events)

       }

       const updateEvent = (updateEvent,  id) =>{

        const events = {...state};
        events[id]={
          ...events[id],
          ...updateEvent
        }
        setState(events)
       }

       return{
        events:state,
         getEventsByClockId,
         getEvents,
         addEvent,
         deleteEvent,
         deleteEventByClock,
         updateEvent,

      
       }
}



export default useEvents