import React from "react";
import "./TriangleMenu.css";
import {TriangleMenuHeaderNav} from "../HeaderNav/HeaderNav";

class TriangleMenu extends React.Component {

  render() {
    return (
        <div className="triangleMenuWrap">
          <i className="smallTriangle fas fa-caret-down"/>
          <TriangleMenuHeaderNav name={this.props.name} link={"#/"+ this.props.name + "/all"} subMenus={this.props.menus}/>
        </div>
    );
  }
}

export default TriangleMenu;