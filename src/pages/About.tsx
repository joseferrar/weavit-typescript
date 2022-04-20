import React from 'react'
import { useLocation } from "react-router-dom";


interface UserProp {
    item: object;
}

function About() {
    const location = useLocation().state as UserProp;
  
    console.log('sdfdsf',location)
  return (
    <div>
      {/* <h1>{location.item.id}</h1> */}
    </div>
  )
}

export default About