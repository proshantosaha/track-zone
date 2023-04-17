// import { LogoDevRounded } from '@mui/icons-material'
import {useState} from 'react'
import ClockFrom from '../clock-from'

const defaultOffset = [
    11.50,
    -11,
    -10.50,
    -10,
    -9.50,
    -9,
    -8.50,
    -8,
    0,1,2,3,4,5,5.5,6,6.5,
]
// console.log(defaultOffset);

const ClockActions = ({local = false, clock,updateClock,createClock}) =>{
    const [isEdit, setIsEdit] = useState(false)
    const [isCreate, seIsCreate] = useState(false )

    const handleClock =(values)=>{
        createClock(values);
        // console.log(values);
    }

    return(
       

        <div>
            {/* <h2>i am action </h2> */}
            <button onClick={()=> setIsEdit(!isEdit)}>Edit</button>

            {local ? <button onClick={()=>seIsCreate(!isCreate)}>create</button> : <button>delete</button>}
            {isEdit && ( 
                <>
                <h3>Edit Clock</h3>
                    <ClockFrom
                        values={clock}
                        handleClock={updateClock}
                        // title={!local}
                        edit={true}
                    
                    />
                </>
               
           
            )}
            {isCreate && ( 
                <>
                <h3>Create a Clock</h3>
                    <ClockFrom
                    
                        handleClock={handleClock}
                        // title={true}
                        // edit={true}
                    
                    />
                </>
               
           
            )}
        </div>
    )
    
}

export default ClockActions









//
//     <div>
//          <input name='title' type='text' value={clock.title} onChange={handleChange}/>
         
        
         {/* <input type="number" value={clock.offset /60} onChange={handleChange}/> */}
     
//      </div>