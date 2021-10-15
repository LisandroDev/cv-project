/* eslint-disable react/prop-types */
import React from "react";
import uniqid from "uniqid";
import { MdBook, MdLabel } from "react-icons/md";
import { AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"

class Education extends React.Component {
  render() {
    const educationObject = this.props.educationState;
    const educationClean = {
      schoolname: "",
      degree: "",
      startyear: "",
      endyear: "",
      id: uniqid(),
    };

    const updater = (elem, val) => {
      let clone = educationObject;
      clone[elem] = val;
      this.props.handler({ education: clone });
    };

    const onSubmitTask = (e) => {
      e.preventDefault();
      this.props.handler({
        education: educationClean,
        schools: this.props.educationArray.concat(this.props.educationState),
      });
    };


    return (
      <div className="g-div">
        <form onSubmit={onSubmitTask}>
        <button type="button" className="visible-button" onClick={this.props.changeVisible}>{this.props.isVisible ? <AiOutlineEye/> : <AiOutlineEyeInvisible/> } </button>
          <div className="field">
            <label htmlFor="schoolname">
              <MdBook />
            </label>
            <input
              type="text"
              id="schoolname"
              placeholder="School Name"
              value={educationObject.schoolname}
              onChange={(e) => updater("schoolname", e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="degree">
              <MdLabel />
            </label>
            <input
              type="text"
              id="degree"
              placeholder="Degree"
              value={educationObject.degree}
              onChange={(e) => updater("degree", e.target.value)}
              required
            />
          </div>
          <div className="year-inputs">
            <input
              type="number"
              min="1900"
              max="2099"
              id="start-date"
              placeholder="Start year"
              value={educationObject.startyear}
              onChange={(e) => updater("startyear", e.target.value)}
              required
            />
            <input
              type="number"
              min="1900"
              max="2099"
              id="end-date"
              placeholder="End Year or expected"
              value={educationObject.endyear}
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

export default Education;
