import React from "react";
import "./MainBody.css";
class MainBody extends React.Component {
    render() {
        return (
            <div>
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"/>
                        <li data-target="#demo" data-slide-to="1"/>
                        <li data-target="#demo" data-slide-to="2"/>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/img/이미지4.jpg"  className="mainScreen" alt="Los Angeles"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/이미지3.jpg" className="mainScreen" alt="Chicago"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/img/이미지5.jpg" className="mainScreen" alt="New York"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        {/*<span className="carousel-control-prev-icon"/>*/}
                        <span>
                            <div className="main-front-slick-prev test" alt="New York"/>
                        </span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        {/*<span className="carousel-control-next-icon"/>*/}
                        <span>
                            <div className="main-front-slick-arrow main-front-slick-next" alt="New York"/>
                        </span>
                    </a>
                </div>
            </div>
        );
    }
}

export default MainBody;