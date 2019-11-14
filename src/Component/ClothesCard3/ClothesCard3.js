import React from "react";
import "./ClothesCard3.css";

class ClothesCard3 extends React.Component {
    render() {
        const {cloths} = this.props;

        return (
            <div className="clothesCard3" >
                <div className="clothesCard3ImageWrap">
                    <div className="clothesCard3Image" style={{backgroundImage: "url("+cloths.image+")"}}/>
                    <div className="size-box">
                        <i className="far fa-heart"/>
                        <div className="clotCard2HeartText">{cloths.heartCnt}</div>
                    </div>
                </div>
                <div className="thumbnail-info transition-normal">
                    <div className="title">{cloths.title}</div>
                    <div className="price clear">
                        <div className="pull-left"><strong>{cloths.salePrice.toLocaleString()}</strong>
                            <del>{cloths.firstPrice.toLocaleString()}</del>
                        </div>
                    </div>
                    <div className="color-chip">
                        {
                            cloths.colorPick.map((v,i) => (<div style={{backgroundColor: v.color}} className="middle-color-circle" key={i} title={v.title}/>))
                        }
                    </div>
                </div>
            </div>





        );
    }
}

export default ClothesCard3;