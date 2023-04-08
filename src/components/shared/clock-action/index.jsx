import {useState} from 'react'



const ClockActions = ({local = false, clock}) =>{
    const [isEdit, setIsEdit] = useState(false)

    return(

        <div>
            {/* <h2>i am action </h2> */}
            <button onClick={()=> setIsEdit(!isEdit)}>Edit</button>

            {local ? <button>create</button> : <button>delete</button>}

            {isEdit && ( 
               <div>
                    <input type='text' value={clock.title}/>
                    <select name="timezone" value={clock.timezone}>
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
                        <input type="number" value={clock.offset}/>
                    )}
                
                </div>
            )}
        </div>
    )
    
}

export default ClockActions