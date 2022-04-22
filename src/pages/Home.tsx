import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ThoughtCard from "../components/Cards/ThoughtCard";
import ReactPaginate from "react-paginate";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import { getData } from "../data/dummyData";
import spell from "../images/spell.png";
import FindSection from "../components/NotFound/FindSection";
import arrowleft from "../images/arrow-left.png";
import arrowright from "../images/arrow-right.png";
import { Carousel } from "react-responsive-carousel";


function Home() {
  const data = getData();
  const [post, setPost] = useState(data);

  const deleteItem = (index: any) => {
    const newTodoItems = [...post];
    newTodoItems.splice(index, 1);
    setPost(newTodoItems);
  };

  const handleRLDDChange = (reorderedItems: any) => {
    // console.log('Example.handleRLDDChange');
    setPost(reorderedItems);
  };

  const itemRenderer = (item: any) => {
    return <ThoughtCard item={item} />;
  };

  return (
    <div>
      <div style={{ marginTop: -2 }}>
        <Grid
          container
          spacing={2}
          marginLeft={-6}
          style={{ position: "fixed", top: "3em", left: "1em" }}
        ></Grid>
        <Grid container marginLeft={-4} marginTop={-2}>
          <Avatar
            alt="Remy Sharp"
            src={spell}
            sx={{ width: 25, height: 25, marginTop: 0.5 }}
          />
          <Typography
            style={{
              marginLeft: 6,
              fontSize: 22,
              width: 420,
              fontFamily: "DMSans-Regular",
            }}
          >
            Your Thought Space
          </Typography>
        </Grid>
        {post.map((item, index) => (
          <Chip
            deleteIcon={<CloseIcon style={{ fontSize: 20 }} />}
            label={item.title}
            onDelete={() => deleteItem(index)}
            style={{
              marginLeft: -40,
              marginRight: 50,
              marginTop: 14,
              fontFamily: "DMSans-Medium",
            }}
          />
        ))}
      </div>

      <Grid
        container
        marginTop={-2}
        style={{ cursor: "grab", marginLeft: -50 }}
      >
        
        <RLDD
          layout="horizontal"
          items={post}
          itemRenderer={itemRenderer}
          onChange={handleRLDDChange}
        />
      </Grid>
     
      {data.length === 0 && <FindSection />}
    </div>
  );
}

export default Home;