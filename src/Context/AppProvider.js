import React from "react";

export const AppContext = React.createContext({
  loggedInUser: [],
  setLoggedInUser: (val) => {},
  menuTabs: 0,
  setMenuTabs: 0,
});

const AppProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = React.useState();
  const [menuTabs, setMenuTabs] = React.useState(0);

  return (
    <AppContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        menuTabs,
        setMenuTabs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
