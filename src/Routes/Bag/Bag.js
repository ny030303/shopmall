import React from "react";
import OtherShopPage from "../../Component/OtherShopPage/OtherShopPage";
import eventService from "../../services/EventService";
import {DBItemDataToItems, getBagItems} from "../../services/DataService";


export class Bag extends React.Component {
  state = {
    shopInfo: {
      name: "BAG",
      subMenu: [{link: "#/bag/bag", name: "bag", menu: ["HAND BAG", "CASUAL BAG"]}],
    },
    bagItems: [],
    current: {menuIdx: 0, subMenuIdx: 0}
  };

  componentDidMount() {
    eventService.listenEvent('onTriangleMenuChange', idx => this.onChange(null, idx));
    const {subMenu} = this.props.match.params;
    this.onChange(Number(subMenu), 0);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if( prevProps.match.params.subMenu != this.props.match.params.subMenu ) {
      let newMenuIdx = Number(this.props.match.params.subMenu)-1;
      console.log(newMenuIdx, this.state.current.menuIdx);
      if (newMenuIdx != this.state.current.menuIdx) {
        this.onChange(newMenuIdx, null);
      }
    }
  }

  componentWillUnmount() {
    eventService.unlistenEvent('onTriangleMenuChange');
  }

  onChange = (menuIdx, subMenuIdx) => {
    const {current, shopInfo} = this.state;
    if (subMenuIdx != null) {
      current.subMenuIdx = subMenuIdx;
      menuIdx = 0;
    }
    if (menuIdx !== null) {
      current.menuIdx = menuIdx;
      getBagItems(current.menuIdx + 1, res => {
        let bagItems = [];
        res.data.forEach(item => bagItems.push(DBItemDataToItems(item)));
        this.setState({bagItems: bagItems});
      });
    }
    this.setState(current);
  };

  render() {
    return (
      <div>
        <OtherShopPage items={this.state.bagItems} shopInfo={this.state.shopInfo} current={this.state.current}
                       onChange={this.onChange}/>
      </div>
    )
  }
}