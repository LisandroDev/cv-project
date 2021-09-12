import React from "react";
import { MdPerson , MdEmail } from "react-icons/md"

class Curriculum extends React.Component {
    render() {
        const info  = this.props.state
        return(
            <div className="curriculum-g">
            <h3> <MdPerson /> Name: {info.name} </h3>
            <h3> <MdEmail /> Email: {info.email}</h3>
            </div>
        )
    }
}

export default Curriculum;