import React from "react";
import Select from 'react-select'
import "./MainTitle.css";
import {Link} from "react-router-dom";
import {HeaderNav} from "../Component/HeaderNav/HeaderNav";
import eventService from "../services/EventService";

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
        {link: "#/men/3", name: "PANTS/SHORTS"},
        {link: "#/men/4", name: "DENIM"},
        {link: "#/men/5", name: "ACC"}
      ],
      denim: [
        {link: "#/denim/1", name: "COATS/JACKETS"},
        {link: "#/denim/2", name: "T-SHIRTS/SHIRTS/SWEATER"},
        {link: "#/denim/3", name: "DRESS/SKIRT"},
        {link: "#/denim/4", name: "PANTS/SHORTS"},
        {link: "#/denim/5", name: "DENIM"},
        {link: "#/denim/6", name: "ACC"}
      ],
      bag: [
        {link: "#/bag/1", name: "HAND BAG"},
        {link: "#/bag/2", name: "CASUAL BAG"}
      ],
      sale: [
        {link: "#/sale/1", name: "MEN"},
        {link: "#/sale/2", name: "WOMEN"},
        {link: "#/sale/3", name: "BAG"},
      ],
      event: [
        {link: "#/event/1", name: "PROMOTION"},
        {link: "#/event/2", name: "LOOKBOOK"},
        {link: "#/event/3", name: "CAMPAIGN"},
      ]
    },
    scrollTop: 0,
    isMainHead: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    eventService.listenEvent('onMainContents', mount => this.setState({isMainHead: mount}));
  }

  componentWillUnmount() {
    eventService.unlistenEvent('onMainContents');
  }

  onScroll = (e) => {
    this.setState({scrollTop: e.srcElement.scrollingElement.scrollTop});
  };

  render() {
    let cssScroll = {};
    if (this.state.isMainHead) {
      if (this.state.scrollTop > 0) {
        cssScroll = {
          header: {
            backgroundColor: "rgba(255,255,255,.9)", position: "fixed",
            textShadow: "none",
            boxShadow: "0px 0px 9px 1px #e5e5e5"
          },
          headerNavWrap: {color: "#000000"}
        };
      } else {
        cssScroll.header = {backgroundColor: "rgba(0,0,0,0)", position: "absolute"};
        cssScroll.headerNavWrap = {color: "#f9f9f9"};
        cssScroll.header.textShadow = "rgb(229, 229, 229) 0px -2px 10px 0px";
      }
    } else {
      cssScroll = {
        header: {
          backgroundColor: "rgba(255,255,255,.9)", position: "fixed",
          textShadow: "none",
          boxShadow: "rgb(229, 229, 229) 0px -2px 10px 0px"
        },
        headerNavWrap: {color: "#000000"}
      };
    }
    // console.log(this.state.scrollTop);
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
              <HeaderNav name="SALE" link="#/sale/all" subMenus={this.state.subMenus.sale}/>
              <HeaderNav name="EVENT" link="#/event/all" subMenus={this.state.subMenus.event}/>
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