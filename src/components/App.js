import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = ["yash", "harsh", "vipul", "praful"];
    return (
      <>
        <ol key="relativeList">
          {relatives.map((ele, index) => (
            <li key={`relativeListItem${index + 1}`}>{ele}</li>
          ))}
        </ol>
      </>
    );
  }
}
export default App;
