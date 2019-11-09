import React from "react";
import "./ClothesCard2.css";

class ClothesCard2 extends React.Component {
    render() {
        return (
            <div className="clothesCard2">
                <div className="clothesCard2ImageWrap">
                    <div className="clothesCard2Image"/>
                    <div className="size-box">
                        <i className="far fa-heart"></i>
                        <div className="clotCard2HeartText">1</div>
                    </div>
                </div>
                <div className="thumbnail-info transition-normal">
                    <div className="title">여성 백 로고 루즈핏 맨투맨</div>
                    <div className="price clear">
                        <div className="pull-left"><strong>88,200</strong>
                            <del>98,000</del>
                        </div>
                    </div>
                    <div className="color-chip">
                        <div style={{backgroundColor:"#5305ab"}} className="color-circle" title="퍼플"></div>
                        <div style={{backgroundColor:"#fdfbdc"}} className="color-circle" title="아이보리"></div>
                    </div>
                </div>
            </div>





        );
    }
}

export default ClothesCard2;