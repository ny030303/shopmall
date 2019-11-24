import React from "react";
import Select from 'react-select'
import "./MainTitle.css";
import {Link} from "react-router-dom";
import {HeaderNav, HeaderNav2} from "../Component/HeaderNav/HeaderNav";
import eventService from "../services/EventService";

class MainTitle extends React.Component {
  state = {
    subMenus: {
      women: [
        {link: "#/women/1", name: "COATS/JACKETS"},
        {link: "#/women/2", name: "T-SHIRTS/SHIRTS/SWEATER"},
        {link: "#/women/3", name: "DRESS/SKIRT"},
        {link: "#/women/4", name: "PANTS/SHORTS"},
        {link: "#/denim/women-1", name: "DENIM"},
        {link: "#/women/6", name: "ACC"}
      ],
      men: [
        {link: "#/men/1", name: "COATS/JACKETS"},
        {link: "#/men/2", name: "T-SHIRTS/SHIRTS/SWEATER"},
        {link: "#/men/3", name: "PANTS/SHORTS"},
        {link: "#/denim/men-1", name: "DENIM"},
        {link: "#/men/5", name: "ACC"}
      ],
      denim: {
        WOMEN: [
          {link: "#/denim/women-1", name: "SKINNY"},
          {link: "#/denim/women-2", name: "STRAIGHT"},
          {link: "#/denim/women-3", name: "BOOTCUT"},
          {link: "#/denim/women-4", name: "BOYFRIEND/WIDE"},
          {link: "#/denim/women-5", name: "SHORTS"},
          {link: "#/denim/women-6", name: "SKIRT/DRESS"}],
        MEN: [
          {link: "#/denim/men-1", name: "SKINNY"},
          {link: "#/denim/men-2", name: "STRAIGHT"},
          {link: "#/denim/men-3", name: "TAPER"},
          {link: "#/denim/men-4", name: "SHORTS"}
        ]
      },
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
        cssScroll.headerNavWrap = {color: "#f9f9f9", textShadow:"0 0 6px rgba(4,0,0,.3)"};
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
    const {subMenus} = this.state;
    return (
      <div className="header-wrap">
        <div className="header" style={cssScroll.header}>
          <a href="#/">
            <div className="logo"/>
          </a>
          <div className="header-nav-contents">
            <ul className="header-nav-Wrap" style={cssScroll.headerNavWrap}>
              <HeaderNav name="WOMEN" link="#/women/all" subMenus={subMenus.women} wrapColor={cssScroll.headerNavWrap}/>
              <HeaderNav name="MEN" link="#/men/all" subMenus={subMenus.men}  wrapColor={cssScroll.headerNavWrap}/>
              <HeaderNav2 name="DENIM" link="#/denim/all" menus={subMenus.denim}  wrapColor={cssScroll.headerNavWrap}/>
              <HeaderNav name="BAG" link="#/bag/all" subMenus={subMenus.bag}  wrapColor={cssScroll.headerNavWrap}/>
              {/*<HeaderNav name="SALE" link="#/sale/all" subMenus={subMenus.sale}/>*/}
              {/*<HeaderNav name="EVENT" link="#/event/all" subMenus={subMenus.event}/>*/}
            </ul>

            <ul className="header-nav-icons-wrap" style={cssScroll.headerNavWrap}>
              {/*<li><i className="fas fa-search"></i></li>*/}

            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MainTitle;