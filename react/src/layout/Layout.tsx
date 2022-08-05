import React, { CSSProperties, useCallback, useState } from "react";
import { Components, getComponentTitle, componentsList } from "../App";
import {
  BasicVariables,
  ConditionalRendering,
  DependentVariables,
  HelloWorld,
  HTML,
  ListLooping,
  NestingComponents,
  Props,
  Styling,
} from "../components";
import RainbowTypewriter from "../components/Custom/Examples/RainbowTypewriter";
//import { NavbarProps } from "../Navbar/Navbar";
import styles from "./Layout.module.css";

export interface NavbarProps {
  currentComponent: Components;
  menuOpen: boolean;
  action: (option?: Components) => void;
}

interface PageContentProps extends NavbarProps {
  children: React.ReactNode;
}

const PageContent = ({
  currentComponent,
  menuOpen,
  action,
  children,
}: PageContentProps) => {
  return (
    <div
      className={styles.components}
      style={menuOpen ? { display: "none" } : {}}
    >
      <div className={styles.mobile}>
        <div onClick={() => action()}>
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
        </div>
      </div>
      <h1 className={styles.heading}>{getComponentTitle(currentComponent)}</h1>
      {children}
    </div>
  );
};

const Navbar = ({ currentComponent, menuOpen, action }: NavbarProps) => {
  const checkActiveBackground = useCallback(
    (component: Components): CSSProperties => {
      if (currentComponent === component)
        return { backgroundColor: "rgb(37, 33, 151)", color: "white" };
      return {};
    },
    [currentComponent]
  );

  return (
    <nav className={styles.links} style={menuOpen ? { display: "flex" } : {}}>
      <div className={styles.close} onClick={() => action()}>
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
      </div>
      {componentsList.map((component) => (
        <button
          key={`link-${component}`}
          type="button"
          style={checkActiveBackground(component)}
          onClick={() => action(component)}
        >
          {getComponentTitle(component)}
        </button>
      ))}
    </nav>
  );
};

interface LayoutProps extends PageContentProps{
	handleSwitch: (newComponent?: Components) => void;
}

const Layout = ({ children, currentComponent, menuOpen, action, handleSwitch }: LayoutProps) => {

  return (
    <div className={styles.container}>
      <Navbar
        currentComponent={currentComponent}
        menuOpen={menuOpen}
        action={handleSwitch}
      />
      <PageContent
        currentComponent={currentComponent}
        menuOpen={menuOpen}
        action={action}
      >
        {children}
      </PageContent>
    </div>
  );
};

export default Layout;
