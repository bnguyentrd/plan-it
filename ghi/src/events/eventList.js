// import { useEffect, useState } from 'react';
import { useGetEventsQuery } from '../store/eventsApi';


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
                        <th>Details</th>
                        <th>weather</th>
                        <th>Images</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
