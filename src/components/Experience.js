import React from "react";
import {MdWork, MdLabel} from "react-icons/md"

class Experience extends React.Component {
  render() {
    return (
      <div className="g-div">
        <form>
          <div className="field">
            <label for="companyname"><MdWork/></label>
            <input type="text" id="companyname" placeholder="Company Name" />
          </div>
          <div className="field">
            <label for="position"><MdLabel/></label>
            <input type="text" id="position" placeholder="Position title" />
          </div>
          <div className="year-inputs">
            <input
              type="number"
              min="1900"
              max="2099"
              id="start-date"
              placeholder="First year"
            />
            <input
              type="number"
              min="1900"
              max="2099"
              id="end-date"
              placeholder="Last year"
            />
          </div>
          <input type="submit" value="Add to CV"/>
        </form>
      </div>
    );
  }
}

export default Experience;