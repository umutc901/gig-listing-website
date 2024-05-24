import React, { useState, useEffect } from 'react';
import Gig from './Gig';

const GigList = () => {
  const [gigs, setGigs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('useEffect triggered');
    const fetchGigs = async () => {
      try {
        console.log('Starting fetch request');
        const response = await fetch('https://makers-gig-backend.onrender.com/events');
        console.log('Response received:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched gigs:', data);
        // Map data to match the expected properties
        const mappedData = data.map(event => ({
          id: event.event_id,
          bandName: event.band_name,
          src: event.image_url || 'https://via.placeholder.com/150', // Use a placeholder if image_url is empty
          eventDescription: event.description,
          timeDate: event.time,
          eventLocation: event.location || 'Location not provided', // Default text if location is not provided
          isFavorited: false, // Assuming this property is not part of the API response
        }));
        setGigs(mappedData);
      } catch (error) {
        console.error('Error fetching the gigs:', error);
        setError(error.message);
      }
    };

    fetchGigs();
  }, []);

  const toggleFavorite = (id) => {
    setGigs((prevGigs) =>
      prevGigs.map((gig) =>
        gig.id === id ? { ...gig, isFavorited: !gig.isFavorited } : gig
      )
    );
  };

  const sortedGigs = [...gigs].sort((a, b) => b.isFavorited - a.isFavorited);

  return (
    <div className="gig-container">
      {error ? (
        <div className="error">{error}</div>
      ) : (
        sortedGigs.map((gig) => (
          <Gig
            key={gig.id}
            {...gig}
            toggleFavorite={() => toggleFavorite(gig.id)}
          />
        ))
      )}
    </div>
  );
};

export default GigList;
