import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/EventForm.css';



const EventForm = () => {
    const [title, setTitle] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [from_date, setFromDate] = useState("")
    const [to_date, setToDate] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (Event) => {
        event.preventDefault()
        const data = {
            "title": title,
            "city": city,
            "state": state,
            "from_date": from_date,
            "to_date": to_date,
            "description": description,
        }

        const eventUrl = "http://localhost:8001/events/"
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }
        const response = await fetch(eventUrl, fetchConfig)
        if (response.ok) {
            const newEvent = await response.json();
            navigate('/details/' + newEvent.id);
        }
    }

    return (
        <div className='container evntfrm'>
            {/* <Nav /> */}
            <div className='offset-3 col-6 evntform'>
                <div className='shadow p-4 mt-4 event-curve'>
                    <h1>Create An Event</h1>
                    <form onSubmit={handleSubmit} id='create-event-form'>
                        <div className='form-floating mb-3'>
                            <input
                            className="event-size"
                             value={title}
                             onChange={(e) => setTitle(e.target.value)}
                             placeholder='Title'
                             required type='text'
                             name='title'
                             id='title'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                            className="event-size"
                             value={city}
                             onChange={(e) => setCity(e.target.value)}
                             placeholder='City'
                             required type='text'
                             name='city'
                             id='city'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                            className="event-size"
                             value={state}
                             onChange={(e) => setState(e.target.value)}
                             placeholder='State'
                             required type='text'
                             name='state'
                             id='state'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                            className="event-size"
                             value={from_date}
                             onChange={(e) => setFromDate(e.target.value)}
                             placeholder='From'
                             required type='date'
                             name='from_date'
                             id='from_date'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                            className="event-size"
                             value={to_date}
                             onChange={(e) => setToDate(e.target.value)}
                             placeholder='To'
                             required type='date'
                             name='to_date'
                             id='to_date'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                            className="event-size"
                             value={description}
                             onChange={(e) => setDescription(e.target.value)}
                             placeholder='Details'
                             required type='text'
                             name='description'
                             id='description'
                            />
                        </div>
                        <button className='btn btn-primary'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EventForm
