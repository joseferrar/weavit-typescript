import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ThoughtCard from "../components/Cards/ThoughtCard";
import { getData } from "../data/dummyData";
import spell from "../images/spell.png";
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
      <div style={{ marginTop: -30, position: "fixed" }}>
        <div style={{ display: "flex" }}>
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
        </div>
        {post.map((item, index) => (
          <Chip
            deleteIcon={<CloseIcon style={{ fontSize: 20 }} />}
            label={item.title}
            onDelete={() => deleteItem(index)}
            style={{
              marginLeft: 12,
              marginTop: 14,
              fontFamily: "DMSans-Medium",
            }}
          />
        ))}
      </div>
      <Stack direction="row" spacing={-2.5} marginTop={-2}>
        {post &&
          post.map((item, index) => (
            <div key={index} style={{ marginTop: 30, marginLeft: -22 }}>
              <ThoughtCard item={item} />
            </div>
          ))}
      </Stack>
      {post.length === 0 && <FindSection />}
    </div>
  );
}

export default Home;
