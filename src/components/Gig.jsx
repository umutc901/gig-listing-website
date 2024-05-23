import React, { useState } from 'react';
import "../Gig.css";

const Gig = (props) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const toggleFavorite = () => {
        setIsFavorited(prevState => !prevState);
    };

    return (
        <div className="gig">
            <h3 className="band-name">{props.bandName}</h3>
            <img className="band-image" src={props.src} alt="Band" />
            <p className="event-description">{props.eventDescription}</p>
            <p className="time-date">{props.timeDate}</p>
            <p className="event-location">{props.eventLocation}</p>
            <button
                className={`favorite-button ${isFavorited ? 'favorited' : ''}`}
                onClick={toggleFavorite}
            >
                <i className={`fa-heart ${isFavorited ? 'fas' : 'far'}`}></i>
            </button>
        </div>
    );
};

export default Gig;
