import React from "react";
import { MdPhone, MdPerson, MdEmail, MdLanguage } from "react-icons/md";

class GeneralInfo extends React.Component {
  render() {
    const generalObject = this.props.generalState;

    const updater = (elem, val) => {
      let clone = generalObject;
      clone[elem] = val;
      this.props.handler({ general: clone });
    };

    return (
      <div className="g-div">
        <form>
          <div className="field">
            <label for="name">
              {" "}
              <MdPerson />{" "}
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              onChange={(e) => updater("name", e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label for="phonenumber">
              <MdPhone />
            </label>
            <input
              type="text"
              id="phonenumber"
              placeholder="Phone Number"
              onChange={(e) => updater("phonenumber", e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label for="email">
              <MdEmail />
            </label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              onChange={(e) => updater("email", e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label for="website">
              <MdLanguage />
            </label>
            <input
              type="text"
              id="website"
              placeholder="Website"
              onChange={(e) => updater("website", e.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
