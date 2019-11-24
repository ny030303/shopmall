import React from "react";
import ShopContents from "../../Component/ShopPage/ShopContents/ShopContents";
import {DBItemDataToItems,  getBestItems, getNormalItems} from "../../services/DataService";
import MainFooter from "../../MainFooter/MainFooter";

export class Women extends React.Component {
  state = {
    shopInfo: {
      name: "WOMEN",
      background: "/img/SPTitle1.jpg",
    },
    bestItems: [],
    normalItems: []
  };

  componentDidMount() {
    this.updateItems(this.props.match.params);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if( prevProps.match.params.subMenu != this.props.match.params.subMenu ) {
      this.updateItems(this.props.match.params);
    }
  }

  updateItems = (params) => {
    console.log(params);
    getBestItems('women', params.subMenu, 5, res => {
      let bestItems = [];
      res.data.forEach(item => bestItems.push(DBItemDataToItems(item)));
      this.setState({bestItems: bestItems});
    });

    getNormalItems('women', params.subMenu, res => {
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