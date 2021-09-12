import React from "react";
import { MdPhone, MdPerson, MdEmail, MdLanguage } from "react-icons/md";

class GeneralInfo extends React.Component {
  render() {
    return (
      <div className="g-div">
        <form>
          <div className="field">
            <label for="name">
              {" "}
              <MdPerson />{" "}
            </label>
            <input type="text" id="name" placeholder="Name" onChange={(e) => this.props.handler({name: e.target.value})} />
          </div>
          <div className="field">
            <label for="phonenumber">
              {" "}
              <MdPhone />{" "}
            </label>
            <input type="text" id="phonenumber" placeholder="Phone Number" onChange={(e) => this.props.handler({phonenumber: e.target.value})}/>
          </div>
          <div className="field">
            <label for="email">
              {" "}
              <MdEmail />{" "}
            </label>
            <input type="text" id="email" placeholder="Email" onChange={(e) => this.props.handler({email: e.target.value})}/>
          </div>
          <div className="field">
            <label for="website">
              <MdLanguage />
            </label>
            <input type="text" id="website" placeholder="Website" onChange={(e) => this.props.handler({website: e.target.value})} />
          </div>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
