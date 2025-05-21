import React from "react";
import Nav from "../Components/Nav/Nav";
import MainTab from "../Components/Tabs/MainTab";
import Table from "../Components/Tables/Table";
import Button from "../Components/Button/Button";

const ClientWindow = () => {
  const headers = ["Name", "Email", "Role"];
  const data = [
    { name: "Alice", email: "alice@example.com", role: "Admin" },
    { name: "Bob", email: "bob@example.com", role: "User" },
  ];
  return (
    <>
      <Nav title={"Client"} />
      <div className="center-design-container">
        <Button title={"Create client"} />
        <Table headers={headers} data={data} />
      </div>
    </>
  );
};

export default ClientWindow;
