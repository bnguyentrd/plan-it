// import { useEffect, useState } from 'react';
import { useGetEventsQuery } from '../store/eventsApi';


export default function EventList() {
    const { data, isLoading } = useGetEventsQuery()

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
                        <th>Location</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Details</th>
                        <th>weather</th>
                        <th>Images</th>
                    </tr>
                </thead>
                <tbody>
                    {data.events.map(events => (
                        <tr key={events.id}>
                            <td>
                                {events.title}
                            </td>
                            <td>
                                {events.location}
                            </td>
                            <td>
                                {events.from_date}
                            </td>
                            <td>
                                {events.to_date}
                            </td>
                            <td>
                                {events.description}
                            </td>
                            <td>
                                {events.weather}
                            </td>
                            <td>
                                {events.url}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
