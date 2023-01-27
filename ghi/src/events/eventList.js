import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import Nav from '../Nav';
import '../css/EventList.css';

function EventList() {
    const [events, setEvents] = useState([])
    // const { token } = useAuthContext()
    // console.log("TOKENNNNNN", token)
    // const navigate = useNavigate()

    useEffect(() => {
            const url = "http://localhost:8001/events/"
            const response =  fetch(url, {
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                    // 'Authorization': `Bearer ${token}`,
                }
            })
            if (response.ok) {
                const data =  response.json()
                setEvents(data)
            }

    })

    return (
        <div className='columns is-centered height'>
            <Nav />
            <table className='table is-striped th-divider'>
                <thead className="event-table">
                    <tr className="event-title-size">
                        <th>Title</th>
                        <th>City</th>
                        <th>State</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Details</th>
                        <th>Weather</th>
                        <th>Images</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event.id}>
                            <td>
                                <Link to={`/details/${event.id}/`}>
                                    {event.title}
                                </Link>
                            </td>
                            <td>
                                {event.city}
                            </td>
                            <td>
                                {event.state}
                            </td>
                            <td>
                                {event.from_date}
                            </td>
                            <td>
                                {event.to_date}
                            </td>
                            <td>
                                {event.description}
                            </td>
                            <td>
                                {event.weather}
                            </td>
                            <td>
                                {event.url}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EventList