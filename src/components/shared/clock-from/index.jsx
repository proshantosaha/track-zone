import {useState,useEffect} from 'react'
import {getOffset} from '../../../utilis/timeZone'
import { TIMEZONE_OFFSET} from '../../../constants/timeZone'
/**
 * 1. for local clock title won't be change
 * 2. to create a new clock we have to create , title ,timezone ,offset,
 */

// const values ={
//     title:'',
//     timezone:'',
//     offset:0,
// }

const ClockFrom = ({
     values={
        title:'',   
        timezone:'',
        offset:'',
        }, 
            handleClock, 
            title=true,
            edit=false}) =>{
   
    const [formValues,setFormValues] = useState({...values})

                useEffect(()=>{
                   if(TIMEZONE_OFFSET[formValues.timezone]){
                    setFormValues(prev=>({
                        ...prev,
                        offset:TIMEZONE_OFFSET[formValues.timezone],
                    }))
                   }
                },[formValues.timezone])

    const handleChange =(e)=>{
            let {name , value} = e.target
    
            if(name === 'offset'){
                value = Number(value) * 60
            }
            setFormValues((prev)=>({
                ...prev,
                [name]:value,
            }))
        }  

    const handleSubmit = (e) =>{
        e.preventDefault()
        handleClock(formValues);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Enter Title</label>
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    value={formValues.title}
                    onChange={handleChange}
                    
                  
                 />
            </div>


            <div>
                <label htmlFor="timezone">Enter timezone</label>
                 <select 
                    name="timezone"
                    value={formValues.timezone}
                    onChange={handleChange}
                    >

                    <option value='GMT'>GMT</option>
                    <option value='PST'>PST</option>
                    <option value='EST'>EST</option>
                    <option value='MST'>MST</option>
                    <option value='EDT'>EDT</option> 
                    <option value='UTC'>UTC</option>
                    <option value='BST'>BST</option>
                </select>
            </div>

            {(formValues.timezone === 'GMT' || formValues.timezone === 'UTC')
            &&(
                <div>
                    <label htmlFor="offset">Enter Offset</label>
                
                    <select
                      name="offset" 
                      id="offset" 
                      value={formValues.offset/60}
                      onChange={handleChange}
                    >
                        {getOffset().map((offset)=>(
                            <option 
                                key={offset} 
                                value={offset}>
                                    {offset }

                            </option>
                        ))}
                    </select>
                </div>
            )}
            <button>{edit ? "update" : "create"}</button>
        </form>
    )

}

export default ClockFrom