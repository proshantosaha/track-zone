import {useState} from 'react'
import {getOffset} from '../../../utilis/timeZone'
/**
 * 1. for local clock title won't be change
 * 2. to create a new clock we have to create , title ,timezone ,offset,
 */

// const values ={
//     title:'',
//     timezone:'',
//     offset:0,
// }

const ClockFrom = ({values, handleClock, title=true, edit=false}) =>{
    const [formValues,setFormValues] = useState({...values})

 

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
        handleClock(formValues )
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
                     disabled={!title}
                 />
            </div>


            <div>
                <label htmlFor="timezone">Enter timezone</label>
                <input 
                    type="text" 
                    name="timezone" 
                    id="timezone" 
                    value={formValues.timezone}
                    onChange={handleChange}
               
                 />
            </div>

            {(formValues.timezone === 'GMT' || formValues.timezone === 'UTC')
            &&(
                <div>
                    <label htmlFor="offset">Enter Offset</label>
                    <input 
                        type="text" 
                        name="offset" 
                        id="offset" 
                        value={formValues.offset}
                        onChange={handleChange}
                    
                    />
                
                    <select
                        name='offset' 
                        value={formValues.offset/60}
                        onChange={handleChange}>
                    
                        {getOffset().map((offset)=>(
                            <option 
                                key={offset} 
                                value={offset}>

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