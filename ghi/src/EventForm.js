import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './css/MPeventform.css';


                        ///////////////////////////////////////
                        // THIS EVENT FORM IS FOR MAIN PAGE //
                        /////////////////////////////////////



const EventForm = () => {
    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [from_date, setFromDate] = useState("")
    const [to_date, setToDate] = useState("")
    const [description, setDescription] = useState("")
    // const [url, setUrl] = useState("")
    // const [weather, setWeather] = useState("")
    const navigate = useNavigate

    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = {
            "title": title,
            "location": location,
            "from_date": from_date,
            "to_date": to_date,
            "description": description,
            // "url": url,
            // "weather": weather
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
            const newEvent = await response.json()
            // navigate(`/events/${newEvent.id}`)
        }
    }

    return (
        <div className='box-size'>
            <div className='offset-3 col-6 radius'>
                <div className='shadow p-4 mt-4 radius'>
                    <h1 className="neonText">Create An Event</h1>
                    <form onSubmit={handleSubmit} id='create-event-form'>
                        <div className='form-floating mb-3'>
                            <br></br>
                            <input
                             value={title}
                             onChange={(e) => setTitle(e.target.value)}
                             placeholder=' Title'
                             required type='text'
                             name='title'
                             id='title'
                             className='input-size'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <br></br>
                            <input
                             value={location}
                             onChange={(e) => setLocation(e.target.value)}
                             placeholder=' Location'
                             required type='text'
                             name='location'
                             id='location'
                             className='input-size'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <h1 className="date neonText">From Date</h1>
                            <input
                             value={from_date}
                             onChange={(e) => setFromDate(e.target.value)}
                             placeholder='MM/DD/YYYY'
                             required type='date'
                             name='from_date'
                             id='from_date'
                             className='input-size'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <h1 className="date neonText">To Date</h1>
                            <input
                             value={to_date}
                             onChange={(e) => setToDate(e.target.value)}
                             placeholder=' To Date'
                             required type='date'
                             name='to_date'
                             id='to_date'
                             className='input-size'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <br></br>
                            <input
                             value={description}
                             onChange={(e) => setDescription(e.target.value)}
                             placeholder=' Details'
                             required type='text'
                             name='description'
                             id='description'
                             className='input-size'
                            />
                        </div>
                        <button className='btn btn-primary radius'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EventForm
