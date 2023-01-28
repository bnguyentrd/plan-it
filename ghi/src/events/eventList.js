import { useGetEventsQuery } from '../store/eventsApi';
import { Link } from 'react-router-dom'




export default function EventList() {
    const { data: eventData, isLoading } = useGetEventsQuery()

    if (isLoading) {
        return (
            <progress className='progress is-primary' max="100"></progress>
        )
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
                        <th>weather</th>
                    </tr>
                </thead>
                <tbody>
                    {eventData.map(event => (
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
                                {event.weather}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
