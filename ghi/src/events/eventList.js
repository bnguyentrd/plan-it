// import { useState,useEffect } from 'react';
import { useGetEventsQuery } from '../store/eventsApi';
import { Link } from 'react-router-dom'
// import { useAuthContext } from '../accounts/Authentication';



export default function EventList() {
    const { data: eventData, isLoading } = useGetEventsQuery()
    // const {token} = useToken()

    // const [events, setEvents] = useState()

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
                        {/* <th>Details</th> */}
                        <th>weather</th>
                        {/* <th>Images</th> */}
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
                            {/* <td>
                                {event.description}
                            </td> */}
                            <td>
                                {event.weather}
                            </td>
                            {/* <td>
                                {event.url}
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


// function EventList() {
//     const [events, setEvents] = useState([])
//     const {token} = useAuthContext()


//     useEffect(() => {
//         async function fetchEvents() {
//             const url = "http://localhost:8001/events/"
//             const response = await fetch(url, {
//                 method: 'get',
//                 headers: {
//                     "Content-Type": "application/json",
//                     'Authorization': `Bearer ${token}`,
//                 }
//             })
//             if (response.ok) {
//                 const data = await response.json()
//                 setEvents(data)
//             }
//         }
//         if (token) {
//             fetchEvents()
//         }
//     }, [token])

//     return (
//         <div className='columns is-centered'>
//             <table className='table is-striped'>
//                 <thead>
//                     <tr>
//                         <th>title</th>
//                         <th>city</th>
//                         <th>state</th>
//                         <th>From</th>
//                         <th>To</th>
//                         <th>Details</th>
//                         <th>weather</th>
//                         <th>Images</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {events.map(event => (
//                         <tr key={event.id}>
//                             <td>
//                                 <Link to={`/details/${event.id}/`}>
//                                     {event.title}
//                                 </Link>
//                             </td>
//                             <td>
//                                 {event.city}
//                             </td>
//                             <td>
//                                 {event.state}
//                             </td>
//                             <td>
//                                 {event.from_date}
//                             </td>
//                             <td>
//                                 {event.to_date}
//                             </td>
//                             <td>
//                                 {event.description}
//                             </td>
//                             <td>
//                                 {event.weather}
//                             </td>
//                             <td>
//                                 {event.url}
//                             </td>
//                             </td> */}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default EventList
