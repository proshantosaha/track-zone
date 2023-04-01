import ClockList from "./components/clock-list"
import LocalClock from "./components/local-clock"
import useClock from "./hooks/useClock"



function App() {
   const{date: localDate,timezone,offset} = useClock();
   console.log(localDate);
 return(
  <>
   <ClockList/>
   

    {localDate !== null &&(
   
      <LocalClock 
      date={localDate}
      timezone={timezone}
      offset={offset}
      />
    )}   
 

  
  </>
 )
}

export default App
