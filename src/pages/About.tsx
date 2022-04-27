import React from "react";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "../App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function App() {
  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map((num) => <h3>Slide {num}</h3>);

  return (
    <div>
      dsfds
      <Slider
        dots={false}
        slidesToShow={4}
        slidesToScroll={2}
        autoplay={true}
        autoplaySpeed={3000}
      >
    
    <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
      </Slider>
    </div>
  );
}
