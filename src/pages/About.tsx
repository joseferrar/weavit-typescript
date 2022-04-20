import React from "react";
import { useLocation } from "react-router-dom";

interface UserProp {
  id: number;
}

function About() {
  const location = useLocation().state as UserProp;

  console.log("sdfdsf", location);
  return <div>{location.id}</div>;
}

export default About;
