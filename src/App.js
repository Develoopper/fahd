import React from 'react';
import Form from './Components/Form';
import NavBar from "./Components/NavBar";

function App() {
  return (
    <> 
      <NavBar/>
      <Form formName="Register" inputName={"Username"}>
        <i className="material-icons" style={{ fontSize: 35 }}>account_circle</i>
      </Form>
    </>
  );
}

export default App;
