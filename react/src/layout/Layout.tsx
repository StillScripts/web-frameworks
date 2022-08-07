import React, { CSSProperties, useCallback, useState } from "react";
import { Components, getComponentTitle, componentsList } from "../App";
//import { NavbarProps } from "../Navbar/Navbar";
import styles from "./Layout.module.css";

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="32px"
    width="32px"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const NavIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="32px"
    width="32px"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

interface LayoutProps {
  currentComponent: Components;
  menuOpen: boolean;
  action: (option?: Components) => void;
  handleSwitch: (newComponent?: Components) => void;
  children: React.ReactNode;
}

const Layout = ({
  children,
  currentComponent,
  menuOpen,
  action,
  handleSwitch,
}: LayoutProps) => {
  const checkActiveBackground = useCallback(
    (component: Components): CSSProperties => {
      if (currentComponent === component)
        return { backgroundColor: "rgb(37, 33, 151)", color: "white" };
      return {};
    },
    [currentComponent]
  );

  return (
    <div className={styles.container}>
      <nav className={styles.links} style={menuOpen ? { display: "flex" } : {}}>
        <div className={styles.close} onClick={() => handleSwitch()}>
          <CloseIcon />
        </div>
        {componentsList.map((component) => (
          <button
            key={`link-${component}`}
            type="button"
            style={checkActiveBackground(component)}
            onClick={() => handleSwitch(component)}
          >
            {getComponentTitle(component)}
          </button>
        ))}
      </nav>
      <div
        className={styles.components}
        style={menuOpen ? { display: "none" } : {}}
      >
        <div className={styles.mobile}>
          <div onClick={() => action()}>
            <NavIcon />
          </div>
        </div>
        <h1 className={styles.heading}>
          {getComponentTitle(currentComponent)}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
