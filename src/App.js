import GeneralInfo from "./components/GeneralInfo";
import Curriculum from "./components/Curriculum";
import Header from "./components/Header";
import Education from "./components/Education";
import "./styles/App.scss";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
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
        startyear: 0,
        endyear: 0,
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
          <Education />
          <h2>Work Experience</h2>
          <Experience />
          <h2>Skills</h2>
          <Skills />
        </div>
        <Curriculum state={this.state.general} />
        <footer className="footer-g"> Github </footer>
      </div>
    );
  }
}

export default App;
