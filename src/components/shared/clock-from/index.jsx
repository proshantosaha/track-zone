import {useState} from 'react'
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
        const {name,value} = e.target
        setFormValues({
            ...formValues,
            [name]:value
        })
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

            <div>
                <label htmlFor="offset">Enter Offset</label>
                <input 
                    type="text" 
                    name="offset" 
                    id="offset" 
                    value={formValues.offset}
                    onChange={handleChange}
                    disabled={!title}
                 />
            </div>

            <button>{edit ? "update" : "create"}</button>
        </form>
    )

}

export default ClockFrom