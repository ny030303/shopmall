import React from "react";
import OtherShopPage from "../../Component/OtherShopPage/OtherShopPage";
import MainFooter from "../../MainFooter/MainFooter";
import eventService from "../../services/EventService";


export class Bag extends React.Component {
  state = {
    shopInfo: {
      name: "BAG",
      menu: ["HAND BAG", "CASUAL BAG"],
      subMenu: [{link: "#/bag/bag", name: "bag"}],
    },
    current: {menuIdx: 0, subMenuIdx: 0}
  };

  componentDidMount() {
    eventService.listenEvent('onTriangleMenuChange', idx => this.onChange(null, idx));
  }

  componentWillUnmount() {
    eventService.unlistenEvent('onTriangleMenuChange');
  }

  onChange = (menuIdx, subMenuIdx) => {
    const {current} = this.state;
    if( menuIdx ) {
      current.menuIdx = menuIdx;
    }
    if( subMenuIdx ) {
      current.subMenuIdx = subMenuIdx;
    }
    this.setState(current);
  };

  render() {
    const {subMenu} = this.props.match.params;
    console.log('Men-subMenu:', subMenu);
    return (
      <div>
        <OtherShopPage shopInfo={this.state.shopInfo} current={this.state.current} onChange={this.onChange}/>
      </div>
    )
  }
}