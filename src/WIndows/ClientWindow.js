import React from "react";
import Nav from "../Components/Nav/Nav";
import MainTab from "../Components/Tabs/MainTab";
import Table from "../Components/Tables/Table";
import Button from "../Components/Button/Button";
import { APP_ICONS } from "../Context/Settings";
import { AppContext } from "../Context/AppProvider";

const ClientWindow = () => {
  const { menuTabs } = React.useContext(AppContext);
  const headers = ["Name", "Client_code", "No"];
  const data = [
    {
      name: "alice",
      client_code: "alice@example.com",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "bob",
      client_code: "bob@company.org",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "charlie",
      client_code: "charlie@domain.com",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "diana",
      client_code: "diana@example.com",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "ethan",
      client_code: "ethan@biz.com",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "fiona",
      client_code: "fiona@services.org",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "george",
      client_code: "george@system.io",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "hannah",
      client_code: "hannah@demo.net",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "ian",
      client_code: "ian@startup.dev",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "jane",
      client_code: "jane@example.org",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "kevin",
      client_code: "kevin@corp.com",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "lena",
      client_code: "lena@client.io",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "mike",
      client_code: "mike@web.co",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "nora",
      client_code: "nora@hosted.app",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "oscar",
      client_code: "oscar@group.biz",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "paula",
      client_code: "paula@crm.org",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "quinn",
      client_code: "quinn@network.dev",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "rita",
      client_code: "rita@system.com",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "steve",
      client_code: "steve@workplace.io",
      no: String(Math.floor(Math.random() * 101)),
    },
    {
      name: "tina",
      client_code: "tina@example.co",
      no: String(Math.floor(Math.random() * 101)),
    },
  ];

  console.log(menuTabs)

  return (
    <>
      <Nav title={"Binary City"} />
      {menuTabs === 0 && (
        <div className="center-design-container">
          <Table headers={headers} data={data} />
        </div>
      )}
    </>
  );
};

export default ClientWindow;
