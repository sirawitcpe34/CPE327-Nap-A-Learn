import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { React, useEffect, useState } from 'react';
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { BiArrowFromRight } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import { HiOutlineMenu } from "react-icons/hi";

// SideNavBarAdmin for Admin (userrole = 2)
const SideNavBar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);
  const [userID, setuserID] = useState('')
  useEffect(() => {
    setuserID(sessionStorage.getItem('usernumberID'))
  }, [])
  const menuItems = [
    { id: 1, label: "Dashboard", icon: AiOutlineHome, link: `/dashboard/${userID}` },
    { id: 3, label: "Learning Materials", icon: GoBook, link: "/learning" },
    { id: 4, label: "Professional Skills", icon: BsPeople, link: "/professional" },
    { id: 6, label: "[Admin] User", icon: FiUsers, link: "/user" },
    { id: 7, label: "[Admin] Manage", icon: AiOutlineSetting, link: "/manage" },
  ];
  const router = useRouter();
  const wrapperClasses = classNames(
    "h-auto min-h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );
  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        //["bg-light-lighter"]: menu.id === activeMenu
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col sticky top-8">
        <div className="flex items-center justify ml-1 relative">
          <div className="flex items-center pl-1 gap-4">
            <HiOutlineMenu size={30} color="header" />
            <span
              className={classNames("mt-1 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              Menu
            </span>
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <BiArrowFromRight />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-8">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full mr-1">
                    <div style={{ width: "2.5rem" }}>
                      <Icon size={24} />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light mr-1"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;