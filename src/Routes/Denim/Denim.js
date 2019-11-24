import React from "react";
import OtherShopPage from "../../Component/OtherShopPage/OtherShopPage";
import eventService from "../../services/EventService";
import {DBItemDataToItems, getDenimItems} from "../../services/DataService";

export class Denim extends React.Component {
  state = {
    shopInfo: {
      name: "DENIM",
      subMenu: [
        {
          link: "#/denim/women",
          name: "WOMEN",
          menu: ["SKINNY", "STRAIGHT", "BOOTCUT", "BOYFRIEND/WIDE", "SHORTS", "SKIRT/DRESS"]
        },
        {
          link: "#/denim/men",
          name: "MEN",
          menu: ["SKINNY", "STRAIGHT", "TAPER", "SHORTS"]
        }
      ]
    },
    denimItems: [],
    current: {menuIdx: 0, subMenuIdx: 0}
  };

  componentDidMount() {
    // const {current, shopInfo} = this.props;
    console.log(this.props.match);
    eventService.listenEvent('onTriangleMenuChange', idx => this.onChange(null, idx));
    this.onChange(0, 0);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.subMenu != this.props.match.params.subMenu) {
      console.log(prevProps.match.params, this.props.match.params);
      let selectedMenu = this.props.match.params.subMenu.split('-');
      this.onChange(Number(selectedMenu[1]) - 1, selectedMenu[0] == 'women' ? 0 : 1);
    }
  }

  componentWillUnmount() {
    eventService.unlistenEvent('onTriangleMenuChange');
  }

  onChange = (menuIdx, subMenuIdx) => {
    const {current, shopInfo} = this.state;
    if (subMenuIdx != null) {
      current.subMenuIdx = subMenuIdx;
      menuIdx = menuIdx || 0;
    }
    if (menuIdx !== null) {
      current.menuIdx = menuIdx;
      getDenimItems(shopInfo.subMenu[Number(current.subMenuIdx)].name.toLowerCase(), current.menuIdx + 1, res => {
        let denimItems = [];
        res.data.forEach(item => denimItems.push(DBItemDataToItems(item)));
        this.setState({denimItems: denimItems});
      });
    }
    this.setState(current);
    console.log('current change: ', this.state.current);
  };

  render() {
    const {subMenu} = this.props.match.params;
    console.log('Denim-subMenu:', subMenu);
    return (
      <div>
        <OtherShopPage items={this.state.denimItems} shopInfo={this.state.shopInfo} current={this.state.current}
                       onChange={this.onChange}/>
      </div>
    )
  }
}