import React from "react";
import "./DetailClothesInfo.css";

class DetailClothesInfo extends React.Component {
  state = {

  };

  render() {
    return (
      <div>
        <div className="tab-content" id="DetailClothesInfo">
          <div id="home" className="container tab-pane active"><br/>
            <div className="detailClothesInfoimg">
              <img src={this.props.cloth.image} alt="사진정보1"/>
              <img src={this.props.cloth.hoverImage} alt="사진정보2"/>
            </div>
          </div>
          <div id="menu1" className="container tab-pane fade"><br/>
            <h3>구매후기</h3>

          </div>
          <div id="menu2" className="container tab-pane fade"><br/>
            <h3>배송/교환/반품</h3>

          </div>
        </div>
      </div>
    );
  }
}

// off-canvas
export default DetailClothesInfo;