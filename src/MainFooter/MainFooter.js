import React from "react";
import Select from 'react-select'
import "./MainFooter.css";

class MainFooter extends React.Component {

    render() {
        return (
            <div className="mainFooterWrap">
                <div className="boxCenter">
                    <div className="footerTextBox">
                        <ul className="ft_menu">
                            <li>회사소개</li>
                            <li>매장안내</li>
                            <li>개인정보처리방침</li>
                            <li>이용약관</li>
                            <li>고객센터</li>
                        </ul>
                        <p>온라인 쇼핑몰 관련문의: 1234-5678 (주문,배송,교환,환불문의)  AM 10:00 ~ PM 5:00 (토,일, 공휴일 휴무)</p>
                        <p>게스코리아 대표번호: 010-123-1234  AM 10:00 ~ PM 5:00카카오톡 상담: @게스코리아 (A/S문의만가능)</p>
                        <div className="margin1"></div>
                        <p className="copyright">COPYRIGHT (c) GUESSKOREA. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainFooter;