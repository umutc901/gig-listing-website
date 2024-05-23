import React from "react";
import GigList from "./components/GigList";
import Form from "./components/Form"; // Import the Form component
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <div className="header-container">
        <div className="header-title">
          Gig Finder
        </div>
        <div className="header-form">
          <Form />
        </div>
      </div>
      <GigList />
    </>
  );
}

export default App;
