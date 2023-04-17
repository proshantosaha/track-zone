// import { Checkbox } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {generate} from 'shortid'
import { Container } from '@mui/system';
import LocalClock from './components/local-clock';
import ClockList from './components/clock-list';
import { useState } from 'react';
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



  return (
    <>
      <CssBaseline />
      <Container>
        {/* <h2> ooo hello</h2> */}
        
        <LocalClock
           updateClock={updateLocalClock}
           clock={localClock}
           createClock={createClock}
           />
        
        <ClockList
         clocks={clocks}
        
        />

        {/* <Checkbox/> */}
      </Container>
     
    </>
  );
}