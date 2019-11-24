import React from "react";
import "./MainContents.css";
import {SimpleSlider} from "./SimpleSlider/SimpleSlider";
import MainSmallCard from "./MainSmallCard/MainSmallCard";
import MainVideoBox from "./MainVideoBox/MainVideoBox";
import MainBody from "../MainBody/MainBody";
import MainFooter from "../../../MainFooter/MainFooter";
import eventService from "../../../services/EventService";

class MainContents extends React.Component {
  componentDidMount() {
    eventService.emitEvent('onMainContents', true);
  }

  componentWillUnmount() {
    eventService.emitEvent('onMainContents', false);
  }

  state = {
    datas: [
      {
        imgSrc: "/img/mainSmallCardImg1.jpg",
        text: "오직 온라인에서만 만날 수 있는 상품들"
      },
      {
        imgSrc: "/img/mainSmallCardImg2.jpg",
        text: "GUESS HANDBAG & CASUAL BAG"
      }
    ]
  }

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
                {
                  this.state.datas.map((v, i) => (<MainSmallCard key={i} datas={v}/>))
                }
              </div>
              <div className="middleMargin"/>
              <MainVideoBox/>
              <div className="middleMargin"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContents;