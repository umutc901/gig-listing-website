import React from "react";
import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import Gig from "./components/Gig";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
      <Hello name="Finder" />
      <div className="gig-container">
        <Gig 
          bandName="Pink Floyd"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Pink_Floyd_-_all_members.jpg/250px-Pink_Floyd_-_all_members.jpg"
          eventDescription="The Darkside of the Moon tour"
          timeDate="June 17, 1972, 8:00 PM"
          eventLocation="Rainbow Theatre, London, UK"
        />
        <Gig 
          bandName="Tyler The Creator"
          src="https://www.academymusicgroup.com/o2academybrixton/sites/default/files/styles/flexslider_full/public/node_gallery/tyler_the_creator_brixton_by_ollie_millington_-_1.jpg?itok=MzjQdtjX"
          eventDescription="IGOR Tour"
          timeDate="September 16, 2019, 8:00 PM"
          eventLocation="o2 Arena, London, UK"
        />
      </div>
    </>
  );
}

export default App;
