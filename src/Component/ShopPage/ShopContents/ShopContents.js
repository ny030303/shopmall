import React from "react";
import "./ShopContents.css";
import SPTitle from "../SPTitle/SPTitle";
import ClothesCard2 from "../../ClothesCard2/ClothesCard2";

class ShopContents extends React.Component {
    render() {
        return (
            <div className="screen">
                <SPTitle/>
                <div className="margin1"></div>
                <div>
                    <div className="shopBestText">WOMEN BEST</div>
                    <div className="shopBestLineBar"></div>
                </div>
                <div className="inner_align" style={{width: "1250px"}}>
                    <ClothesCard2/>
                    <ClothesCard2/>
                    <ClothesCard2/>
                    <ClothesCard2/>
                    <ClothesCard2/>
                </div>
            </div>
        );
    }
}

export default ShopContents;