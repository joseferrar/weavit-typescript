import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ThoughtCard from "../components/Cards/ThoughtCard";
import { getData } from "../data/dummyData";
import cloudlogo from "../images/Icon.png";
import FindSection from "../components/NotFound/FindSection";

function Home() {
  const data = getData();
  const [post, setPost] = useState(data);

  const deleteItem = (index: any) => {
    const newTodoItems = [...post];
    newTodoItems.splice(index, 1);
    setPost(newTodoItems);
  };

  return (
    <div>
      <div style={{ display: "flex", marginTop: -30, marginLeft: 22 }}>
        <Avatar
          alt="Remy Sharp"
          src={cloudlogo}
          sx={{ width: 25, height: 25, marginTop: 1 }}
        />
        <Typography
          style={{ marginLeft: 6, fontSize: 22, fontFamily: "DMSans-Regular" }}
        >
          Your Thought Space
        </Typography>
      </div>

      {post &&
        post.map((item, index) => (
          <Chip
            deleteIcon={<CloseIcon style={{ fontSize: 20 }} />}
            label={item.title}
            onDelete={() => deleteItem(index)}
            style={{
              marginLeft: 22,
              marginTop: 14,
              fontFamily: "DMSans-Medium",
            }}
          />
        ))}
      <Stack direction="row" spacing={-2} marginTop={-2}>
        {post &&
          post.map((item, index) => (
            <div key={index}>
              <ThoughtCard item={item} />
            </div>
          ))}
      </Stack>
      {post.length === 0 && <FindSection />}
    </div>
  );
}

export default Home;
