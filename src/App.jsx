// import { Checkbox } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
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

export default function App() {
  
  const [localClock,setLocalClock] = useState({...LOCAL_CLOCK_INIT});
  
  const updateLocalClock =(data)=>{
      setLocalClock({
        ...localClock,
        ...data
      })
  }
  

  return (
    <>
      <CssBaseline />
      <Container>
        <h2> ooo hello</h2>
        
        <LocalClock
           updateClock={updateLocalClock}
           clock={localClock}
           />
        
        <ClockList/>

        {/* <Checkbox/> */}
      </Container>
     
    </>
  );
}