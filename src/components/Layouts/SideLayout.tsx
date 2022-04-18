import React from "react";

interface SideLayoutProps {
  children: React.ReactNode;
}

function SideLayout(props: SideLayoutProps) {
  return (
    <div
      style={{
        width: 300,
        position: "fixed",
        overflowY: "scroll",
        height: 580,
        left: 0,
        top: 0,
        marginTop: 85,
        textAlign: "center",
      }}
    >
      {props.children}
    </div>
  );
}

export default SideLayout;
