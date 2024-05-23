import React, { useState } from 'react';
import Gig from './Gig';

const GigList = () => {
  const [gigs, setGigs] = useState([
    {
      id: 1,
      bandName: "Pink Floyd",
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Pink_Floyd_-_all_members.jpg/250px-Pink_Floyd_-_all_members.jpg",
      eventDescription: "The Darkside of the Moon tour",
      timeDate: "June 17, 1972, 8:00 PM",
      eventLocation: "Rainbow Theatre, London, UK",
      isFavorited: false
    },
    {
      id: 2,
      bandName: "Tyler The Creator",
      src: "https://www.academymusicgroup.com/o2academybrixton/sites/default/files/styles/flexslider_full/public/node_gallery/tyler_the_creator_brixton_by_ollie_millington_-_1.jpg?itok=MzjQdtjX",
      eventDescription: "IGOR Tour",
      timeDate: "September 16, 2019, 8:00 PM",
      eventLocation: "o2 Arena, London, UK",
      isFavorited: false
    }
  ]);

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
      {sortedGigs.map((gig) => (
        <Gig
          key={gig.id}
          {...gig}
          toggleFavorite={() => toggleFavorite(gig.id)}
        />
      ))}
    </div>
  );
};

export default GigList;
