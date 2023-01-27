import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import ChecklistDetail from "../checklists/checklistDetails.js";
import { Navigate, useNavigate } from "react-router-dom";

const EventDetail = () => {
  const [eventDetail, setEventDetail] = useState({});
  const [deleted, setDeleted] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/update/${id}`;
    navigate(path);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      const url = `${process.env.REACT_APP_EVENTS_SERVICE}/events/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setEventDetail(data);
    };
    fetchEvents();
  }, [id]);

  const deleteEvent = async (e) => {
    // const url = `http://localhost:8001/events/${id}?event_id=${id}`
    const url = `${process.env.REACT_APP_EVENTS_SERVICE}/events/${id}?event_id=${id}`;

    const fetchConfig = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      setDeleted(true);
    }
  };

  return (
    <div className="card page-size">
      <Nav />
      <img
        className="card-img-top"
        src={eventDetail.url}
        width="200"
        height="200"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{eventDetail.title}</h5>
        <p className="card-text">{eventDetail.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {eventDetail.from_date}, {eventDetail.to_date}
        </li>
        <li className="list-group-item">
          {eventDetail.city}, {eventDetail.state}
        </li>
        <li className="list-group-item">
          Current Forecast: {eventDetail.weather}
        </li>
      </ul>
      <div className="card-body">
        {deleted && <Navigate to="/events" replace={true} />}
        <p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => deleteEvent(eventDetail.id)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={routeChange}
          >
            Update
          </button>
        </p>
      </div>
      <ChecklistDetail id />
    </div>
  );
};

export default () => {
  return <EventDetail />;
};
