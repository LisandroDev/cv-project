import GeneralInfo from "./components/GeneralInfo";
import Curriculum from "./components/Curriculum";
import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import "./styles/App.scss";
import React from "react";
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      general: {
        name: "",
        email: "",
        phonenumber: "",
        website: "",
      },
      education: {
        schoolname: "",
        degree: "",
        startyear: "Start year",
        endyear: "End year",
        id: uniqid(),
      },
      workexperience: {
        companyname: "",
        position: "",
        startyear: 0,
        endyear: 0,
        id: uniqid(),
      },
      skill: { text: "" },
      schools: [],
      works: [],
      skills: [],
    };
  }

  handlerStates = (args) => {
    this.setState(args);
  };

  render() {
    return (
      <div className="container-grid">
        <Header />
        <div className="generalinfo-g">
          <h2>General info</h2>
          <GeneralInfo
            handler={this.handlerStates}
            generalState={this.state.general}
          />
          <h2>Education</h2>
          <Education
            handler={this.handlerStates}
            educationState={this.state.education}
            educationArray={this.state.schools}
          />
          <h2>Work Experience</h2>
          <Experience
            handler={this.handlerStates}
            workState={this.state.workexperience}
            workArray={this.state.works}
          />
          <h2>Skills</h2>
          <Skills
            handler={this.handlerStates}
            skillsState={this.state.skill}
            skillsArray={this.state.skills}
          />
        </div>
        <Curriculum
          generalInfo={this.state.general}
          schoolsInfo={this.state.schools}
          worksInfo={this.state.works}
          skillsInfo={this.state.skills}
        />
        <footer className="footer-g"> Github </footer>
      </div>
    );
  }
}

export default App;
