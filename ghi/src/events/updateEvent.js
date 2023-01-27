import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";


const UpdateEvent = () => {
    const [title, setTitle] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [from_date, setFromDate] = useState("")
    const [to_date, setToDate] = useState("")
    const [description, setDescription] = useState("")
    const [isUpdated, setIsUpdated] = useState(false)

    const {id} = useParams()
    // const url = `http://localhost:8001/events/${id}?event_id=${id}`
    const url = `${process.env.REACT_APP_EVENTS_SERVICE}/events/${id}?event_id=${id}`

    useEffect(() => {
        async function fetchEvents() {
            const response = await fetch(url, {
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                }
            })

            if (response.ok) {
                const data = await response.json()
                setTitle(data.title)
                setCity(data.city)
                setState(data.state)
                setFromDate(data.from_date)
                setToDate(data.to_date)
                setDescription(data.description)
            }
        }
        fetchEvents()
    }, [])

    const updateEvent = async (event) => {
        const data = {
            title: title,
            city: city,
            state: state,
            from_date: from_date,
            to_date: to_date,
            description: description,
        }

        const fetchConfig = {
            method: 'put',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            setIsUpdated(true)
        }
    }

    return (
        <>
        <div>
            <h4>Edit Event</h4>
            <form onSubmit={updateEvent}>
                <div className='form-floating mb-3'>
                            <input
                            className="event-size"
                            //  value={title}
                             onChange={(e) => setTitle(e.target.value)}
                             placeholder={title}
                             type='text'
                             name='title'
                             id='title'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                            className="event-size"
                            //  value={city}
                             onChange={(e) => setCity(e.target.value)}
                             placeholder={city}
                             type='text'
                             name='city'
                             id='city'

                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                            className="event-size"
                            //  value={state}
                             onChange={(e) => setState(e.target.value)}
                             placeholder={state}
                             type='text'
                             name='state'
                             id='state'

                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                            className="event-size"
                            //  value={from_date}
                             onChange={(e) => setFromDate(e.target.value)}
                             placeholder={from_date}
                             type='date'
                             name='from_date'
                             id='from_date'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                            className="event-size"
                            //  value={to_date}
                             onChange={(e) => setFromDate(e.target.value)}
                             placeholder={to_date}
                             type='date'
                             name='to_date'
                             id='to_date'
                            />
                        </div>
                        <div className='form-floating mb-3'>
                            <input
                            className="event-size"
                             onChange={(e) => setDescription(e.target.value)}
                             placeholder={description}
                             type='text'
                             name='description'
                             id='description'
                            />
                        </div>
                        {isUpdated && (
                <Navigate to="/events" replace={true} />
                )}
                <p>
                    <button type='button'
                     className='btn btn-secondary'
                     onClick={() => updateEvent(id)}>
                     Update
                    </button>
                </p>
                    </form>
        </div>
        </>
    )
}

export default UpdateEvent
