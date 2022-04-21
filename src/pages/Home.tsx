import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ThoughtCard from "../components/Cards/ThoughtCard";
import ReactPaginate from "react-paginate";

import { getData } from "../data/dummyData";
import spell from "../images/spell.png";
import FindSection from "../components/NotFound/FindSection";
import arrowleft from "../images/arrow-left.png";
import arrowright from "../images/arrow-right.png";

function Home() {
  const data = getData();
  const [post, setPost] = useState(data);
  const [page, setPage] = useState(0);

  const deleteItem = (index: any) => {
    const newTodoItems = [...post];
    newTodoItems.splice(index, 1);
    setPost(newTodoItems);
  };

  const userPerpage = 4;
  const pageVisited = page * userPerpage;

  const displayUsers = post
    .slice(pageVisited, pageVisited + userPerpage)
    .map((item, index) => (
      <div key={index} style={{ marginTop: 30, marginLeft: -22 }}>
        <ThoughtCard item={item} />
      </div>
    ));

  const pageCount = Math.ceil(post.length / userPerpage);

  const handleChange = ({ selected }: any) => {
    setPage(selected);
  };
  return (
    <div>
      <div style={{ marginTop: -2 }}>
        <Grid
          container
          spacing={2}
          marginLeft={-6}
          style={{ position: "fixed", top: "3em", left: "1em" }}
        >
          
          <ReactPaginate
            nextLabel={
              <Avatar
                alt="Remy Sharp"
                src={arrowright}
                sx={{ width: 20, height: 20 }}
              />
            }
            onPageChange={handleChange}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={
              <Avatar
                alt="Remy Sharp"
                src={arrowleft}
                sx={{ width: 15, height: 15 }}
              />
            }
            containerClassName="pagenationBtts"
            previousClassName=""
            nextLinkClassName=""
            disabledClassName="pagenationDisabled"
            // activeClassName="pagenationActive"
          />
        </Grid>
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
      {/* <h2>{page}</h2> */}

      <Grid container spacing={8} marginTop={-6}>
        {displayUsers}
      </Grid>
      {data.length === 0 && <FindSection />}
    </div>
  );
}

export default Home;
