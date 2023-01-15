import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


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
        <div className='container'>
            <div className='offset-3 col-6'>
                <div className='shadow p-4 mt-4'>
                    <h1>Create An Event</h1>
                    <form onSubmit={handleSubmit} id='create-event-form'>
                        <div className='form-floating mb-3'>
                            <input
                             value={title}
                             onChange={(e) => setTitle(e.target.value)}
                             placeholder='Title'
                             required type='text'
                             name='title'
                             id='title'
                             className='form-control'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                             value={location}
                             onChange={(e) => setLocation(e.target.value)}
                             placeholder='Location'
                             required type='text'
                             name='location'
                             id='location'
                             className='form-control'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                             value={from_date}
                             onChange={(e) => setFromDate(e.target.value)}
                             placeholder='From'
                             required type='date'
                             name='from_date'
                             id='from_date'
                             className='form-control'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                             value={to_date}
                             onChange={(e) => setToDate(e.target.value)}
                             placeholder='To'
                             required type='date'
                             name='to_date'
                             id='to_date'
                             className='form-control'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                             value={description}
                             onChange={(e) => setDescription(e.target.value)}
                             placeholder='Details'
                             required type='text'
                             name='description'
                             id='description'
                             className='form-control'
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
