import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const EventDetail = () => {
    const [eventDetail, setEventDetail] = useState({})
    const { id } = useParams()


    useEffect(() => {
        const fetchEvents = async () => {
            const url = `http://localhost:8001/events/${id}/`
            const response = await fetch(url)
            const data = await response.json()
            setEventDetail(data)
        }
        fetchEvents()
    }, [id])

    return (
        <div className='card'>
            <img className='card-img-top' src={eventDetail.url} width="200" height="200" alt=''/>
            <div className="card-body">
                <h5 className="card-title">{eventDetail.title}</h5>
                <p className="card-text">{eventDetail.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{eventDetail.from_date},  {eventDetail.to_date}</li>
                <li className="list-group-item">{eventDetail.city},  {eventDetail.state}</li>
                <li className="list-group-item">Current Forecast:   {eventDetail.weather}</li>
            </ul>
            <div className='card-body'>
                <p>Add cancel event button here</p>
            </div>
        </div>

    )
}

export default () => {
    return (
        <EventDetail />
    )
}
