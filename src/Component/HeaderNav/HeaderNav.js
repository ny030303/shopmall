import React from "react";
import eventService from "../../services/EventService";

const emitSelectSubMenuEvent = (e) => {
  eventService.emitEvent('onTriangleMenuChange', Number(e.target.dataset.id));
};

export const HeaderNav = ({name, link, subMenus}) => (
  <li className="header-nav">
    <a href={link}>{name}</a>
    <div className="headerSubMenu">
      <ul>
        {subMenus.map((v, i) => (<li key={i}><a href={v.link}>{v.name}</a></li>))}
      </ul>
    </div>
  </li>
);

export const TriangleMenuHeaderNav = ({name, link, subMenus}) => (
  <div className="headerSubMenu" style={{ marginTop: "10px"}}>
    <ul>
      {subMenus.map((v, i) => (
        <li key={i}>
          <a data-id={i} href={v.link} onClick={emitSelectSubMenuEvent}>{v.name}</a>
        </li>))}
    </ul>
  </div>
);