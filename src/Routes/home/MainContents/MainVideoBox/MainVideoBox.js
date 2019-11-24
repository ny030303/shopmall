import React from "react";
import "./MainVideoBox.css";

class MainVideoBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemImage: {
                item2: ""
            }
        }
    }


    render() {
        return (
            <div className="mainVideoBox">
                <div className="mainVideoImg"/>

            </div>
        );
    }
}

export default MainVideoBox;