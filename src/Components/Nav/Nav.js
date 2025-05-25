import React from "react";
import { APP_ICONS } from "../../Context/Settings";
import MainTab from "../Tabs/MainTab";
import { useNavigate, useNavigation } from "react-router-dom";
import { AppContext } from "../../Context/AppProvider";

const Nav = ({ title }) => {
  const { menuTabs, setMenuTabs } = React.useContext(AppContext);
  //const [mainTabs, setMainTabs] = React.useState(0);

  const nav = useNavigate();

  const tabs = [
    {
      name: "Client",
      id: 0,
      onClick: () => setMenuTabs(0),
    },
    {
      name: "Create Client",
      id: 1,
      onClick: () => setMenuTabs(1),
    },
    {
      name: "Contact",
      id: 2,
      onClick: () => setMenuTabs(2),
    },
  ];
  return (
    <>
      <div className="nav-outline">
        <div className="nav-far-left">
          <h1>{title}</h1>
          <div className="input-with-icon">
            <small className="input-icon-text">{APP_ICONS.SEARCH}</small>
            <input
              type={"search"}
              placeholder="Search Clients, Contact, and more ..."
              className="search-input"
            />
          </div>
        </div>
      </div>
      <div className="nav-main-tab-container">
        {tabs.map((e, i) => {
          return (
            <MainTab
              title={e.name}
              key={i}
              onClick={e.onClick}
              className={
                e.id === menuTabs ? "nav-active-tab" : "nav-not-active-tab"
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default Nav;
