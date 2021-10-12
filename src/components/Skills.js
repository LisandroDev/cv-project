import React from "react";
import uniqid from "uniqid";
import { MdFitnessCenter } from "react-icons/md";

class Skills extends React.Component {
  render() {
    const skillObject = this.props.skillsState;
    const skillClean = { text: "", id: uniqid() };

    const updater = (elem, val) => {
      let clone = skillObject;
      clone[elem] = val;
      this.props.handler({ skill: clone });
    };

    const onSubmitTask = (e) => {
      e.preventDefault();
      this.props.handler({
        skill: skillClean,
        skills: this.props.skillsArray.concat(this.props.skillsState),
      });
    };

    return (
      <div className="g-div">
        <form onSubmit={onSubmitTask}>
          <div className="field">
            {" "}
            <label for="skill">
              <MdFitnessCenter />
            </label>
            <input type="text" placeholder="Skills" onChange={(e) => updater("text", e.target.value)} required></input>
          </div>
          <input type="submit" value="Add Skill" />
        </form>
      </div>
    );
  }
}

export default Skills;
