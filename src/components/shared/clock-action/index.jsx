// import { LogoDevRounded } from '@mui/icons-material'
import {useState} from 'react'

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

const ClockActions = ({local = false, clock,updateClock}) =>{
    const [isEdit, setIsEdit] = useState(false)

    const handleChange =(e)=>{
        let {name , value} = e.target

        if(name === 'offset'){
            value = parseInt(value) * 60
        }
        updateClock({
            [name]:value
        })
 
    }  

    return(
       

        <div>
            {/* <h2>i am action </h2> */}
            <button onClick={()=> setIsEdit(!isEdit)}>Edit</button>

            {local ? <button>create</button> : <button>delete</button>}

            {isEdit && ( 
               <div>
                    <input name='title' type='text' value={clock.title} onChange={handleChange}/>
                    <select name="timezone" value={clock.timezone} onChange={handleChange}>
                        <option value='GMT'>GMT</option>
                        <option value='PST'>PST</option>
                        <option value='EST'>EST</option>
                        <option value='MST'>MST</option>
                        <option value='EDT'>EDT</option> 
                        <option value='UTC'>UTC</option>
                        <option value='BST'>BST</option>
                    </select>
                    {(clock.timezone === 'GMT' || clock.timezone === 'UTC')
                      &&(
                        <select name='offset' value={clock.offset/60} onChange={handleChange}>
                        
                            {defaultOffset.map((offset)=>(
                                <option key={offset} value={offset}></option>
                            ))}
                        </select>
                    )}
                    {/* <input type="number" value={clock.offset /60} onChange={handleChange}/> */}
                
                </div>
            )}
        </div>
    )
    
}

export default ClockActions