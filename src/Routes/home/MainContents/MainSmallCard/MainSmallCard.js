import React from "react";
import "./MainSmallCard.css";

class MainSmallCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className="mainSmallCardWrap">
                <div className="img"><img
                    src={this.props.datas.imgSrc}
                    style={{maxWidth: "590px", maxHeight: "406px"}}/>
                </div>
                <div className="mainSmallTextBox">
                    <p className="subject block-vm"><span
                        className="block-vm-inner">{this.props.datas.text}</span></p>
                    <p className="mainSmallCircle"/>
                </div>
            </div>
        );
    }
}

export default MainSmallCard;