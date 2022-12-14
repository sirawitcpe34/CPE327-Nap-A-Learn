import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideNavBar from "./SideNavBar";
import SideNavBarAdmin from "./SideNavBarAdmin";
import SideNavBarUser from "./SideNavBarUser";

// show layout website and sidebar
const Layout = ({ children }) => {
  const [userRole, setuserRole] = useState()
  useEffect(() => {
    setuserRole(sessionStorage.getItem('userrole'))
  }, [])

  return (
    <div className="h-fit flex flex-row justify-start">
      {(userRole) == 3 ? <SideNavBar /> : (userRole) == 2 ? <SideNavBarAdmin /> : <SideNavBarUser />}
      <div className="bg-primary flex-1">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;