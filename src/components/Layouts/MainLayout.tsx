import React from "react";
import PropTypes from "prop-types";
import Header from "../Navigation/Header";
import { theme } from "../../theme/default";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <div style={{ flexGrow: 1, display: "flex" }}>
      <Header />
      <div
        className="bodycontent"
        style={{
          padding: theme.spacing(3),
          marginLeft: theme.spacing(8)
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element,
};
