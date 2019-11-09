import React from "react";
import Select from 'react-select'
import "./SPTitle.css";

class SPTitle extends React.Component {

    render() {
        return (
            <div className="SPTitle">
                <img src="/img/SPTitle1.jpg" className="SPTitleImg"/>
                <div className="SPTitleText">
                    WOMEN<span> 〉 </span>ALL
                    <div className="smallTriangle"></div>
                </div>
            </div>
        );
    }
}

export default SPTitle;