/* eslint-disable react/prop-types */
import React from "react";
import uniqid from "uniqid";
import { MdWork, MdLabel } from "react-icons/md";
import { AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"

class Experience extends React.Component {
  render() {
    const experienceObject = this.props.workState;
    const experienceClean = {
      companyname: "",
      position: "",
      startyear: "",
      endyear: "",
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
        <button type="button" className="visible-button" onClick={this.props.changeVisible}> {this.props.isVisible ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>} </button>
          <div className="field">
            <label htmlFor="companyname">
              <MdWork />
            </label>
            <input
              type="text"
              id="companyname"
              placeholder="Company Name"
              value={experienceObject.companyname}
              onChange={(e) => updater("companyname", e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="position">
              <MdLabel />
            </label>
            <input
              type="text"
              id="position"
              placeholder="Position title"
              value={experienceObject.position}
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
              value={experienceObject.startyear}
              onChange={(e) => updater("startyear", e.target.value)}
              required
            />
            <input
              type="number"
              min="1900"
              max="2099"
              id="end-date"
              placeholder="Last year"
              value={experienceObject.endyear}
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
