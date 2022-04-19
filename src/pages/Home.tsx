import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import Stack from "@mui/material/Stack";
import ThoughtCard from "../components/Cards/ThoughtCard";
import { getData } from "../data/dummyData";

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
      <div style={{ display: "flex", marginTop: -30 }}>
        <CloudQueueIcon sx={{ fontSize: 30 }} />
        <Typography style={{ marginLeft: 6, fontSize: 22 }}>
          Your Thought Space
        </Typography>
      </div>

      {post.map((item, index) => (
        <Chip
          deleteIcon={<CloseIcon style={{ fontSize: 20 }} />}
          label={item.title}
          onDelete={() => deleteItem(index)}
          style={{ marginLeft: 22, marginTop: 12 }}
        />
      ))}
      <Stack direction="row" spacing={-2} marginTop={-2}>
        {post.map((item, index) => (
          <div key={index}>
            <ThoughtCard item={item} />
          </div>
        ))}
      </Stack>
    </div>
  );
}

export default Home;
