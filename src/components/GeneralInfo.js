import React from "react";

class GeneralInfo extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h2>Name:</h2>
          <input type="text"/>
          <h2>Phone Number:</h2>
          <input type="text"/>
          <h2>Email:</h2>
          <input type="text"/>
          <h2>Website:</h2>
          <input type="text"/>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
