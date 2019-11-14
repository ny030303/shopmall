import React from "react";
import OtherShopPage from "../../Component/OtherShopPage/OtherShopPage";
import MainFooter from "../../MainFooter/MainFooter";
import eventService from "../../services/EventService";
import {DBItemDataToItems, getSaleItems} from "../../services/DataService";


export class Sale extends React.Component {
  state = {
    shopInfo: {
      name: "SALE",
      subMenu: [
        {link: "#/sale/women", name: "WOMEN", menu: ["OUTER", "TOP", "DENIM", "ACC"]},
        {link: "#/sale/men", name: "MEN", menu: ["OUTER", "TOP", "DENIM", "ACC"]},
        {link: "#/sale/bag", name: "BAG", menu: ["OUTER", "TOP", "DENIM", "ACC"]}]
    },
    saleItems: [],
    current: {menuIdx: 0, subMenuIdx: 0}
  };

  componentDidMount() {
    eventService.listenEvent('onTriangleMenuChange', idx => this.onChange(null, idx));
    this.onChange(0, 0);
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
      getSaleItems(shopInfo.subMenu[Number(current.subMenuIdx)].name.toLowerCase(), current.menuIdx + 1, res => {
        let saleItems = [];
        res.data.forEach(item => saleItems.push(DBItemDataToItems(item)));
        this.setState({denimItems: saleItems});
      });
    }
    this.setState(current);
  };

  render() {
    const {subMenu} = this.props.match.params;
    console.log('Sale-subMenu:', subMenu);
    return (
      <div>
        <OtherShopPage items={this.state.saleItems} shopInfo={this.state.shopInfo} current={this.state.current}
                       onChange={this.onChange}/>
      </div>
    )
  }
}