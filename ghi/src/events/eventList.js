import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function EventList(props) {
    const [events, setEvents] = useState([])
    const navigate = useNavigate()

    useEffect(() -> {
        async function fetchEvents() {
            const url = ('/events')

            const response = await fetch(url, {
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (response.ok) {
                const data = await response.json()
                setEvents(data)
            }
        }
        const cancelEvent = async (event_id) => {
            const url = `/events/${event_id}`
            const fetchConfig = {
                method: 'delete',
                headers: {
                    "Content-Type": "application/json",
                }
            }
        }
    })
}
