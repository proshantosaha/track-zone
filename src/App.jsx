// import { Checkbox } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {generate} from 'shortid'
import { Container } from '@mui/system';
import LocalClock from './components/local-clock';
import ClockList from './components/clock-list';
import { useEffect, useState } from 'react';
import useEvents from './hooks/useEvent';
import useTimer from './hooks/useTimer';
// import useClock from './hooks/useClock';



const LOCAL_CLOCK_INIT ={
    title:"My clock",
    timezone:'',
    type:'',
    offset:0,
    date:null,
}

// console.log(timezone);
export default function App() {
  
  const [localClock,setLocalClock] = useState({...LOCAL_CLOCK_INIT});


  const [clocks,setClocks] = useState([])
  const {getEvents,getEventsByClockId,addEvent,events } = useEvents()

  useEffect (()=>{
    if(Object.keys(events).length===0){
      const event = addEvent({title : 'Test', clockId : ' Clock-222'});
    }
    
   

  },[events])
  
  const updateLocalClock =(data)=>{
      setLocalClock({
        ...localClock,
        ...data
      })
  }
  
  const createClock=(clock)=>{
     clock.id = generate();
     setClocks([...clocks,clock]);
  }


  const updateClock = (updatedClock) =>{
    const updatedClocks =  clocks.map((clock)=>{
        if (clock.id === updatedClock.id)
        return updatedClock;
        return clock;
      });

      setClocks(updatedClocks)
  }


  const deleteClock =(id)=>{
    const updatedClocks = clocks.filter(clock=>clock.id !== id)
    setClocks(updatedClocks)
  }


  return (
    <>
      <CssBaseline />
      <Container>
        {/* <h2> ooo hello</h2> */}
        
        <LocalClock
            clock={localClock}
           updateClock={updateLocalClock }
           createClock={createClock}
           />
        
        <ClockList
         localClock={localClock.date}
         clocks={clocks}
         updateClock={updateClock}
          deleteClock={deleteClock}
      
        
        />

        {/* <Checkbox/> */}
      </Container>
     
    </>
  );
}