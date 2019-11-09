import React from "react";
import Select from 'react-select'
import "./MainTitle.css";
import {Link} from "react-router-dom";

const HeaderNav = ({name, link, subMenus}) => (
    <li className="header-nav">
        <a href={link}>{name}</a>
        <div className="headerSubMenu">
            <ul>
                {subMenus.map((v, i) => (<li key={i}><a href={v.link}>{v.name}</a></li>))}
            </ul>
        </div>
    </li>
);

class MainTitle extends React.Component {
  state = {
    subMenus: {
      women: [
        {link: "#/women/1", name: "COATS/JACKETS"},
        {link: "#/women/2", name: "T-SHIRTS/SHIRTS/SWEATER"},
        {link: "#/women/3", name: "DRESS/SKIRT"},
        {link: "#/women/4", name: "PANTS/SHORTS"},
        {link: "#/women/5", name: "DENIM"},
        {link: "#/women/6", name: "ACC"}
      ],
      men: [
        {link: "#/men/1", name: "COATS/JACKETS"},
        {link: "#/men/2", name: "T-SHIRTS/SHIRTS/SWEATER"},
        {link: "#/men/3", name: "DRESS/SKIRT"},
        {link: "#/men/4", name: "PANTS/SHORTS"},
        {link: "#/men/5", name: "DENIM"},
        {link: "#/men/6", name: "ACC"}
      ],
      denim: [
        {link: "#/denim/1", name: "COATS/JACKETS"},
        {link: "#/denim/2", name: "T-SHIRTS/SHIRTS/SWEATER"},
        {link: "#/denim/3", name: "DRESS/SKIRT"},
        {link: "#/denim/4", name: "PANTS/SHORTS"},
        {link: "#/denim/5", name: "DENIM"},
        {link: "#/denim/6", name: "ACC"}
      ],
      bag: []
    },
    scrollTop: 0,
    isMainHead: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = (e) => {
    this.setState({scrollTop: e.srcElement.scrollingElement.scrollTop});
  };

  render() {
    let cssScroll = {};
    if (this.state.isMainHead == true) {
      if (this.state.scrollTop > 0) {
        cssScroll = {
          header: {
            backgroundColor: "rgba(255,255,255,.9)", position: "fixed",
            textShadow: "none"
          },
          headerNavWrap: {color: "#000000"}
        };
      } else {
        cssScroll.header = {backgroundColor: "rgba(0,0,0,0)", position: "absolute"};
        cssScroll.headerNavWrap = {color: "#f9f9f9"};
        cssScroll.header.textShadow = "0 0 6px rgba(4,0,0,.3)";
      }
    } else {
      cssScroll = {
        header: {
          backgroundColor: "rgba(255,255,255,.9)", position: "fixed",
          textShadow: "none"
        },
        headerNavWrap: {color: "#000000"}
      };
    }

    console.log(this.state.scrollTop);
    return (
      <div className="header-wrap">
        <div className="header" style={cssScroll.header}>
          <a href="#/">
            <div className="logo"/>
          </a>
          <div className="header-nav-contents">
            <ul className="header-nav-Wrap" style={cssScroll.headerNavWrap}>
              <HeaderNav name="WOMEN" link="#/women/all" subMenus={this.state.subMenus.women}/>
              <HeaderNav name="MEN" link="#/men/all" subMenus={this.state.subMenus.men}/>
              <HeaderNav name="DENIM" link="#/denim/all" subMenus={this.state.subMenus.denim}/>
              <HeaderNav name="BAG" link="#/bag/all" subMenus={this.state.subMenus.bag}/>
              <li className="header-nav">UNDERWEAR</li>
              <li className="header-nav">SALE</li>
              <li className="header-nav">IT's GUESS</li>
            </ul>

            <ul className="header-nav-icons-wrap" style={cssScroll.headerNavWrap}>
              <li><i className="fas fa-search"></i></li>
              <li><a href="#/user"><i className="fas fa-user"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MainTitle;