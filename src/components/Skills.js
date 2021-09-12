import React from "react";
import { MdFitnessCenter } from "react-icons/md";

class Skills extends React.Component {
  render() {
    return (
      <div className="g-div">
        <form>
          <div className="field">
            {" "}
            <label for="skill">
              <MdFitnessCenter />
            </label>
            <input type="text" placeholder="Skills"></input>
          </div>
          <input type="submit" value="Add Skill"/>
        </form>
      </div>
    );
  }
}

export default Skills;
