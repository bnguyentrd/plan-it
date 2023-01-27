import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../css/EventForm.css';
import Nav from '../Nav';


const ChecklistForm = () =>{
    const { id } = useParams()

    const [items, setItems] = useState([]);
    const [item, setItem] = useState('');
    const [status, setStatus] = useState([]);
    const [size, setSize] = useState(1);


    const handleChange = (e) => {
        setItem(e.target.value);
    }


    const addItem = () =>{
        setItems([...items, item]);
        setItem('');
    }


    const setFalse = () => {
        const arr = [];
        for(let k=0; k<items.length; k++){
            arr.push(false);
        }
        setStatus(arr);
    }


    const handleSubmit = async (checklist) => {
        checklist.preventDefault();
        const data = {
            "event_id":id,
            "items": items,
            "status": status
        }

        const checklistUrl = "http://localhost:8001/checklists/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }
        const res = await fetch(checklistUrl, fetchConfig)
        if (res.ok) {
            const newChecklist = await res.json()
        }
    }



    let arr = [];
    for(let i=0; i<size; i++){
        arr.push(i);
    }


    return(
        <div className=''>

            {/* <div>  this was not working as intended so its commented out for now
                <h2>How many items are in this list?</h2>
                <form>
                    <div>
                        <input
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        placeholder={1}
                        required type = 'number'
                        name='size'
                        id='size'
                        />
                    </div>
                </form>
            </div> */}

            <div>
                <h2>Create an checklist</h2>
                    {arr.map(a => {
                        return(
                            <form className='card-body'>

                                <div className='card-body'>
                                    <input
                                    value={item}
                                    onChange={handleChange}
                                    placeholder={'item'}
                                    required type = 'text'
                                    name='item'
                                    id={a}
                                    />
                                </div>

                                <button className='btn btn-primary' onClick={addItem}>Create Item</button>
                                {/** add a way to display the items in the checklist being made here */}
                            </form>
                    )})}

                    <button className='btn btn-primary' onClick={()=>{handleSubmit(); setFalse(); }}>Submit Checklist</button>
            </div>

        </div>
    )
}

export default ChecklistForm;
