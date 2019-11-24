import React from "react";
import Select from 'react-select'
import "./HoverSubList.css";

class HoverSubList extends React.Component {
    state = {
        options: [
            {value: 'chocolate', label: 'Chocolate'},
            {value: 'strawberry', label: 'Strawberry'},
            {value: 'vanilla', label: 'Vanilla'}
        ],

        liDatas: [
            {color: "red", title: "베스트"},
            {color: "blue", title: "남성"},
            {color: "pink", title: "여성"},
            {color: "yellow", title: "키즈"},
            {color: "green", title: "이벤트"}
        ],
        scrollTop: 0,
        isMainHead: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    onScroll = (e) => {
        this.setState({scrollTop: e.srcElement.scrollingElement.scrollTop});
    };

    render() {
        let cssScroll = {};
        if (this.state.scrollTop > 0) {
            cssScroll = {
                header: {
                    backgroundColor: "rgba(255,255,255,.9)", position: "fixed",
                    textShadow: "none"
                },
                headerNavWrap: {color: "#000000"}
            };
        } else {
            cssScroll.header = {backgroundColor: "rgba(0,0,0,0)", position: "absolute"};
            cssScroll.headerNavWrap = {color: "#f9f9f9"};
            cssScroll.header.textShadow = "0 0 6px rgba(4,0,0,.3)";
        }
        console.log(this.state.scrollTop);
        return (
            <div className="">

            </div>
        );
    }
}

export default HoverSubList;