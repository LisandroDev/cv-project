/* eslint-disable react/prop-types */
import React from "react";
import {
  MdPerson,
  MdEmail,
  MdPhone,
  MdLanguage,
  MdKeyboardArrowRight,
} from "react-icons/md";


class Curriculum extends React.Component {
  render() {
    const info = this.props.generalInfo;
    const schools = this.props.schoolsInfo;
    const works = this.props.worksInfo;
    const skills = this.props.skillsInfo;

    const renderWorks = works.map((e) => {
      return (
        <div className="box " key={e.id}>
          <div className="content-box">
            <h4> Company name: {e.companyname} </h4>
            <h4> Position: {e.position} </h4>
            <h4>
              {" "}
              {e.startyear} - {e.endyear}{" "}
            </h4>
          </div>
        </div>
      );
    });

    const renderSchools = schools.map((e) => {
      return (
        <div className="box" key={e.id}>
          <div className="content-box">
            <h4> School name: {e.schoolname} </h4>
            <h4> Degree: {e.degree} </h4>
            <h4>
              {" "}
              {e.startyear} - {e.endyear}{" "}
            </h4>
          </div>
        </div>
      );
    });

    const renderSkills = skills.map((e) => {
      return (
        <div key={e.id}>
          <h4>
            <MdKeyboardArrowRight /> {e.text}{" "}
          </h4>
        </div>
      );
    });

    return (
      <div className="curriculum-g">
        <div className="box">
          <div className="content-box">
            {" "}
            <h4>
              {" "}
              <MdPerson /> Name: {info.name}{" "}
            </h4>
            <h4>
              {" "}
              <MdPhone /> Phone number: {info.phonenumber}{" "}
            </h4>
            <h4>
              {" "}
              <MdEmail /> Email: {info.email}{" "}
            </h4>
            <h4>
              {" "}
              <MdLanguage /> Website: {info.website}{" "}
            </h4>
          </div>
        </div>
        {this.props.edVisible ? (
          <div>
            <p className="p-curriculum">Education:</p> {renderSchools}
          </div>
        ) : null}

        {this.props.workVisible ? (
          <div>
            <p className="p-curriculum">Work experience:</p> {renderWorks}
          </div>
        ) : null}

        {this.props.skillVisible ? (
          <div>
            {" "}
            <p className="p-curriculum">Skills:</p> {renderSkills}{" "}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Curriculum;
