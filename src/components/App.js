import React from "react";
import "../styles/App.css";

function App() {
  let list = ["Goa", "Darjeeling", "Lonavala"];
  return (
    <>
      <ol>
        {list.map((city, index) => (
          <li key={`location${index + 1}`}>{city}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
