import React from "react";
import {withRouter} from 'react-router-dom';
import "./ClothesCard.css";


class ClothesCard extends React.Component {
    gotoDetailClothes = () => {
        console.log(this.props.cloths);
        this.props.history.push("/detailClothes/" + this.props.cloths.pid);
    };
    render() {
        const {cloths} = this.props;
        // console.log(cloths);
        return (
            <div className="clothesCard1" onClick={this.gotoDetailClothes}>
                <div className="image">
                    <div className="clothesCard1Image">
                        <img src={cloths.image} style={{height: "100%"}}/>
                        {/*<img src={cloths.hoverImage} style={{height: "100%"}}/>*/}
                    </div>
                    <div className="size-box">
                        <div className="color-chip">
                        </div>
                    </div>
                </div>
                <div className="thumbnail-info transition-normal">
                    <div className="title">{cloths.title}</div>
                    <div className="price clear">
                        <div className="pull-left"><strong>{cloths.salePrice.toLocaleString()}</strong>
                            &nbsp;&nbsp;<del>{cloths.firstPrice.toLocaleString()}</del>
                        </div>
                    </div>
                    <div className="icons">
                        <img src="/img/icon-new-20180523101301.gif" alt="NEW"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ClothesCard);