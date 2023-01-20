import { useState } from 'react';
import { useGetEventsQuery } from '../store/eventsApi';


export default function EventList() {
    const { data: eventData, isLoading } = useGetEventsQuery()
    const [events, setEvents] = useState()

    if (isLoading) {
        return (
            <progress className='progress is-primary' max="100"></progress>
        )
    }

    const cancelEvent = async (event_id) => {
        const url = `http://localhost:8001/events/${event_id}/`
        const fetchConfig = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        }

        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            await response.json()
            const deleteEvent = events.filter(
                (event) => event.id !== event_id
            )
            setEvents(deleteEvent)
        }
    }


    return (
        <div className='columns is-centered'>
            <table className='table is-striped'>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>city</th>
                        <th>state</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Details</th>
                        <th>weather</th>
                        <th>Images</th>
                        <th>Cancel Event</th>
                    </tr>
                </thead>
                <tbody>
                    {eventData.map(event => (
                        <tr key={event.id}>
                            <td>
                                {event.title}
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
                            {/* <td>
                                <button type='button'
                                 className='btn btn-secondary'
                                 onClick={() => cancelEvent(event.id)}>
                                 Cancel
                                </button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
