// import { Checkbox } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import useClock from './hooks/useClock';
import LocalClock from './components/local-clock';
import ClockList from './components/clock-list'

export default function App() {
  const {date: localDate,localTimeZone,localOffset} = useClock();
console.log(localDate);


  return (
    <>
      <CssBaseline />
      <Container>
        <h2> ooo hello</h2>
        {localDate !== null &&(
          <LocalClock
           date={localDate}
           timezone={localTimeZone}
           offset={localOffset}
           />
        )}
        
        <ClockList/>

        {/* <Checkbox/> */}
      </Container>
     
    </>
  );
}