import GeneralInfo from "./components/GeneralInfo";
import Curriculum from "./components/Curriculum";
import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import { ImGithub } from "react-icons/im";
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
        startyear: "Start year",
        endyear: "End year",
        id: uniqid(),
      },
      skill: { text: "" },
      schools: [],
      works: [],
      skills: [],
      edVisible: false,
      workVisible: false,
      skillVisible: false,
    };
  }

  isEdVisible = () => {
    this.setState({ edVisible: !this.state.edVisible });
    console.log(this.state.edVisible);
  };

  isWorkVisible = () => {
    this.setState({ workVisible: !this.state.workVisible });
    console.log(this.state.workVisible);
  };

  isSkillVisible = () => {
    this.setState({ skillVisible: !this.state.skillVisible });
    console.log(this.state.skillVisible);
  };

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
            changeVisible={this.isEdVisible}
            isVisible={this.state.edVisible}

          />
          <h2>Work Experience</h2>
          <Experience
            handler={this.handlerStates}
            workState={this.state.workexperience}
            workArray={this.state.works}
            changeVisible={this.isWorkVisible}
            isVisible={this.state.workVisible}
          />
          <h2>Skills</h2>
          <Skills
            handler={this.handlerStates}
            skillsState={this.state.skill}
            skillsArray={this.state.skills}
            changeVisible={this.isSkillVisible}
            isVisible={this.state.skillVisible}
          />
        </div>
        <Curriculum
          generalInfo={this.state.general}
          schoolsInfo={this.state.schools}
          worksInfo={this.state.works}
          skillsInfo={this.state.skills}
          edVisible={this.state.edVisible}
          workVisible={this.state.workVisible}
          skillVisible={this.state.skillVisible}
        />
        <footer className="footer-g">
          {" "}
          <a href="https://github.com/lichaa824">
            Github <ImGithub />{" "}
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
