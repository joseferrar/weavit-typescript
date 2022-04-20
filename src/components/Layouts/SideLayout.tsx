import React from "react";

interface SideLayoutProps {
  children: React.ReactNode;
}

function SideLayout(props: SideLayoutProps) {
  return (
    <div className="sidebarcontent" >
      {props.children}
    </div>
  );
}

export default SideLayout;
