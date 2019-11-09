import React from "react";
import "./MainSmallCard.css";

class MainSmallCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemImage: {
                item2: ""
            }
        }
    }


    render() {
        return (
            <div className="mainSmallCardWrap">
                <div className="img"><img
                    src="/img/mainSmallCardImg1.jpg"
                    style={{maxWidth: "590px", maxHeight: "406px"}}/>
                </div>
                <div className="mainSmallTextBox">
                    <p className="subject block-vm"><span
                        className="block-vm-inner">오직 온라인에서만 만날 수 있는 상품들</span></p>
                    <p className="mainSmallCircle"></p>
                </div>
            </div>
        );
    }
}

export default MainSmallCard;