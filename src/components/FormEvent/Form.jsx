import React, { useState } from 'react';
import './Form.css';

const Form = ({handleAddEvent}) => {

    const [eventTitle,setEventTitle] = useState("");
    const [eventDescription,setEventDescription] = useState("");
    const [error,setError] = useState("");

    const handleEventTitleChange=(e)=>{
        setEventTitle(e.target.value);
        setError("");
    };
    const handleEventDescriptionChange=(e)=>{
        setEventDescription(e.target.value);
        setError("");
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(eventTitle.trim() === "" || eventDescription.trim() === ""){
            setError("Please enter a title and description");
            return;
        }
        handleAddEvent(eventTitle,eventDescription);
        setEventTitle("");
        setEventDescription("");
        setError("");
    }

  return (
    <div className='form-containered'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="eventTitle">Event Title: </label>
            <input type="text" id="eventTitle" value={eventTitle} onChange={handleEventTitleChange}/>
            <label htmlFor="eventDescription">Event Description: </label>
            <textarea id="eventDescription" value={eventDescription} onChange={handleEventDescriptionChange}></textarea>
            <button type='submit'>Add Event</button>
        </form>
        {error && <p className='error-msg'>{error}</p>}
      
    </div>
  )
}

export default Form
