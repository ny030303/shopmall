import React from "react";
import "./MainContents.css";
import {SimpleSlider} from "./SimpleSlider/SimpleSlider";
import MainSmallCard from "./MainSmallCard/MainSmallCard";
import MainVideoBox from "./MainVideoBox/MainVideoBox";
import MainBody from "../MainBody/MainBody";
import MainFooter from "../../../MainFooter/MainFooter";

class MainContents extends React.Component {
  render() {
    return (
      <div>
          <MainBody/>
        <div className="screen">
          <div className="mainWrap">
            <div id="mainScreen1" className="mainScreen"/>
            <div className="mainNav">
              <div className="mainNavItemWrap">
                <div className="mainNavItem mainNavItemPoint"/>
                <div className="mainNavItem"/>
              </div>
            </div>
          </div>
          <div className="mainContents">
            <div className="scrollBtn">
              <div className="scrollPadding">
                <i id="scrollMouse" className="fas fa-mouse"/>
                <p>Scroll</p>
              </div>
            </div>
            <div className="main_Contents_area">
              <div className="mainNewArrivalsStyle">NEW ARRIVALS</div>
              <div className="margin1"/>
              <div style={{width: "1750px", display: "block", margin: "0 auto"}}>
                <SimpleSlider/>
              </div>
              <div className="middleMargin"/>
              <img style={{width: "100%"}} src="/img/longImg.jpg"/>
              <div className="margin1"/>
              <div className="holdMainSmallCard">
                <MainSmallCard/>
                <MainSmallCard/>
              </div>
              <div className="middleMargin"/>
              <MainVideoBox/>
              <div className="middleMargin"/>
              <MainFooter/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContents;