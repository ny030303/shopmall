import React from "react";
import Select from 'react-select'
import "./MainHelper.css";

class MainHelper extends React.Component {
    state = {
    };

    render() {
        return (
            <div id="helper">
                <div className="helper-nav-contents">
                    <ul className="helper-nav-Wrap">
                        <li>
                            <div className="helper-nav-icon">
                                <i className="fas fa-shopping-bag"></i>
                            </div>
                            <button className="helper-nav-black-btn"></button>
                        </li>
                        <li>
                            <div className="helper-nav-icon">
                                <i className="far fa-eye"></i>
                            </div>
                            <button className="helper-nav-black-btn"></button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MainHelper;