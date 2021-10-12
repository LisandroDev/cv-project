import React from "react";
import uniqid from "uniqid";
import { MdWork, MdLabel } from "react-icons/md";

class Experience extends React.Component {
  render() {
    const experienceObject = this.props.workState;
    const experienceClean = {
      companyname: "",
      position: "",
      startyear: 0,
      endyear: 0,
      id: uniqid(),
    };

    const updater = (elem, val) => {
      let clone = experienceObject;
      clone[elem] = val;
      this.props.handler({ workexperience: clone });
    };

    const onSubmitTask = (e) => {
      e.preventDefault();
      this.props.handler({
        workexperience: experienceClean,
        works: this.props.workArray.concat(this.props.workState),
      });
    };

    return (
      <div className="g-div">
        <form onSubmit={onSubmitTask}>
          <div className="field">
            <label for="companyname">
              <MdWork />
            </label>
            <input
              type="text"
              id="companyname"
              placeholder="Company Name"
              onChange={(e) => updater("companyname", e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label for="position">
              <MdLabel />
            </label>
            <input
              type="text"
              id="position"
              placeholder="Position title"
              onChange={(e) => updater("position", e.target.value)}
              required
            />
          </div>
          <div className="year-inputs">
            <input
              type="number"
              min="1900"
              max="2099"
              id="start-date"
              placeholder="First year"
              onChange={(e) => updater("startyear", e.target.value)}
              required
            />
            <input
              type="number"
              min="1900"
              max="2099"
              id="end-date"
              placeholder="Last year"
              onChange={(e) => updater("endyear", e.target.value)}
              required
            />
          </div>
          <input type="submit" value="Add to CV" />
        </form>
      </div>
    );
  }
}

export default Experience;
