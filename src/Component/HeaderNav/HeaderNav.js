import React from "react";
import eventService from "../../services/EventService";

const emitSelectSubMenuEvent = (e) => {
  eventService.emitEvent('onTriangleMenuChange', Number(e.target.dataset.id));
};

export const HeaderNav = ({name, link, subMenus, wrapColor}) => (
  <li className="header-nav">
    <a href={link} style={wrapColor}>{name}</a>
    <div className="headerSubMenu">
      <ul>
        {subMenus.map((v, i) => (<li key={i}><a href={v.link}>{v.name}</a></li>))}
      </ul>
    </div>
  </li>
);

export const HeaderNav2 = ({name, link, menus, wrapColor}) => (
  <li className="header-nav">
    <a href={link} style={wrapColor}>{name}</a>
    <div className="headerSubMenu" style={{width: "400px"}}>
      <div className="row">
        {
          Object.keys(menus).map((key, i) => (
            <div key={i} className="col">
              <span>{key}</span>
              <ul style={{marginTop: "10px"}}>
                {menus[key].map((v, i) => (<li key={i}><a href={v.link}>{v.name}</a></li>))}
              </ul>
            </div>
          ))
        }
      </div>
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