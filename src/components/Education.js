import React from "react";
import { MdBook, MdLabel } from "react-icons/md";

class Education extends React.Component {
  render() {
    return (
      <div className="g-div">
        <form>
          <div className="field">
            <label for="schoolname">
              <MdBook />
            </label>
            <input type="text" id="schoolname" placeholder="School Name" />
          </div>
          <div className="field">
            <label for="degree">
              <MdLabel />
            </label>
            <input type="text" id="degree" placeholder="Degree" />
          </div>
          <div className="year-inputs">
            <input
              type="number"
              min="1900"
              max="2099"
              id="start-date"
              placeholder="Start year"
            />
            <input
              type="number"
              min="1900"
              max="2099"
              id="end-date"
              placeholder="End Year or expected"
            />
          </div>
            <input type="submit" value="Add to CV"/>
        </form>
      </div>
    );
  }
}

export default Education;
