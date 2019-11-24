import React from "react";
import ShopContents from "../../Component/ShopPage/ShopContents/ShopContents";
import {DBItemDataToItems, getBestItems, getNormalItems} from "../../services/DataService";

export class Men extends React.Component {
  state = {
    shopInfo: {
      name: "MEN",
      background: "/img/SPTitle2.jpg",
    },
    bestItems: [],
    normalItems: []
  };

  componentDidMount() {
    this.updateItems(this.props.match.params);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.subMenu != this.props.match.params.subMenu) {
      this.updateItems(this.props.match.params);
    }
  }

  updateItems = (params) => {
    console.log(params);
    getBestItems('men', params.subMenu, 5, res => {
      let bestItems = [];
      res.data.forEach(item => bestItems.push(DBItemDataToItems(item)));
      this.setState({bestItems: bestItems});
    });

    getNormalItems('men', params.subMenu, res => {
      let normalItems = [];
      res.data.forEach(item => normalItems.push(DBItemDataToItems(item)));
      this.setState({normalItems: normalItems});
    });
  };

  render() {
    const {bestItems, normalItems, shopInfo} = this.state;
    return (
      <div>
        <ShopContents bestItems={bestItems} normalItems={normalItems} shopInfo={shopInfo}/>
      </div>
    )
  }
}