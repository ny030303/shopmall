import React from "react";
import "./SPTitle.css";
import TriangleMenu from "../../TriangleMenu/TriangleMenu";

class SPTitle extends React.Component {
  state = {
    nowHeaderTitle: this.props.shopInfo.name,
    subMenus: {
      women: [
        {link: "#/women/all", name: "ALL"},
        {link: "#/women/1", name: "COATS/JACKETS"},
        {link: "#/women/2", name: "T-SHIRTS/SHIRTS/SWEATER"},
        {link: "#/women/3", name: "DRESS/SKIRT"},
        {link: "#/women/4", name: "PANTS/SHORTS"},
        {link: "#/women/5", name: "DENIM"},
        {link: "#/women/6", name: "ACC"}
      ],
      men: [
        {link: "#/men/all", name: "ALL"},
        {link: "#/men/1", name: "COATS/JACKETS"},
        {link: "#/men/2", name: "T-SHIRTS/SHIRTS/SWEATER"},
        {link: "#/men/3", name: "PANTS/SHORTS"},
        {link: "#/men/4", name: "DENIM"},
        {link: "#/men/5", name: "ACC"}
      ],

      denim: [
        {link: "#/denim/all", name: "ALL"},
        {link: "#/denim/1", name: "COATS/JACKETS"},
        {link: "#/women/2", name: "T-SHIRTS/SHIRTS/SWEATER"},
        {link: "#/women/3", name: "PANTS/SHORTS"},
        {link: "#/women/4", name: "DENIM"},
        {link: "#/women/5", name: "ACC"}
      ]
    }
  }

  render() {
    return (
      <div className="SPTitle">
        <img src={this.props.shopInfo.background} className="SPTitleImg"/>
        <div className="SPTitleText">
          {this.props.shopInfo.name}<span> 〉 </span> ALL
          <div style={{position: "absolute",top: "-4px",right: "-50px", color:"#fff"}}>
            <TriangleMenu name={this.state.nowHeaderTitle} menus={this.state.subMenus[this.props.shopInfo.name.toLowerCase()]}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SPTitle;