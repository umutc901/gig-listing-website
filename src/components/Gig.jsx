import React from 'react';
import "../Gig.css";

const Gig = ({ bandName, src, eventDescription, timeDate, eventLocation, isFavorited, toggleFavorite }) => {
    return (
        <div className="gig">
            <h3 className="band-name">{bandName}</h3>
            <img className="band-image" src={src} alt={bandName} onError={(e) => e.target.src = 'https://via.placeholder.com/150'} />
            <p className="event-description">{eventDescription}</p>
            <p className="time-date">{timeDate}</p>
            <p className="event-location">{eventLocation}</p>
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
