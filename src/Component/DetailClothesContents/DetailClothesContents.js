import React from "react";
import "./DetailClothesContents.css";
import ImageGallery from "react-image-gallery";

class DetailClothesContents extends React.Component {
    render() {
        const {data} = this.props.match.params;
        console.log("/detailClothes, params Data: " + atob(data));
        const images = [
            {
                original: 'https://picsum.photos/id/1018/1000/600/',
                thumbnail: 'https://picsum.photos/id/1018/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1015/1000/600/',
                thumbnail: 'https://picsum.photos/id/1015/250/150/',
            },
            {
                original: 'https://picsum.photos/id/1019/1000/600/',
                thumbnail: 'https://picsum.photos/id/1019/250/150/',
            },
        ];
        return (
            <div className="detailClothes">
                <div className="marginTop90px"/>
                <div className="inner_align">
                    <ImageGallery items={images} />
                    <div>하위</div>
                </div>
            </div>
        );
    }
}

export default DetailClothesContents;