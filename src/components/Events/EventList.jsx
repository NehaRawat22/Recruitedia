import React from 'react'
import './EventList.css';

const EventList = ({events}) => {
  return (
    <div className='events-listed'>
      <h2>Events</h2>
      {events.length > 0?(
        <ul>
            {events.map((event,index)=>(
                <li key={index}>
                    <p>
                        <strong>Date: </strong> {event.date.toLocaleDateString()}
                    </p>
                    <p>
                        <strong>Title: </strong> {event.title}
                    </p>
                    <p>
                        <strong>Description: </strong> {event.description}
                    </p>
                </li>
            ))}
        </ul>
      ): (
        <p>No events to display</p>
      )}
    </div>
  );
};

export default EventList
