import React from "react";
import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import GigList from "./components/GigList";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Form from "./components/Form"
function App() {
  return (
    <>
      <Form></Form>
      <Hello name="Finder" />
      <GigList />
    </>
  );
}

export default App;
