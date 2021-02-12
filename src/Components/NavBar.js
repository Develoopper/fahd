import React, { useState, useEffect } from 'react'

function NavBar() {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCounter(counter + 1);
  //   }, 1000);
  // }, [counter]);

  return (
    <nav>
      <div className="nav-wrapper teal darken-3">
        <a href="#" className="brand-logo center">Logo</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
        <div className="right" style={{ marginRight: 20 }}>{counter}</div>
      </div>
    </nav>
  )
}

export default NavBar;