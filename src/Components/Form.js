import React, { useState } from 'react'

function Form({ inputName, formName, children }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {children}
          <h3>{formName}</h3>
        </div>

        <div id="div">{formData.email}</div>

        <form >
          <div className="input-field" style={{ width: 500 }}>
            <input onChange={handleEmailChange} id={inputName.toLowerCase()} type="text" className="validate"/>
            <label for={inputName.toLowerCase()}>{inputName}</label>
          </div>

          <div className="input-field" style={{ width: 500 }}>
            <input id="password" type="text" className="validate"/>
            <label for="password">Password</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
