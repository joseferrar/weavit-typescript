import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import Stack from "@mui/material/Stack";
import ThoughtCard from "../components/Cards/ThoughtCard";
import { getData } from "../data/dummyData";

function Home() {
  const data = getData();
  const [post, setPost] = useState(data);
  const handleDelete = () => {
    console.log("just once");
  };

  const deleteItem = (index: any) => {
    const newTodoItems = [...post];
    newTodoItems.splice(index, 1);
    setPost(newTodoItems);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <CloudQueueIcon />
        <Typography>Your Thought Space</Typography>
      </div>
      <Stack direction="row" spacing={2} marginTop={2}>
        {post.map((item, index) => (
          <Chip label={item.title} onDelete={() => deleteItem(index)} />
        ))}
      </Stack>
      <Stack marginTop={2}>
        <ThoughtCard />
      </Stack>
    </div>
  );
}

export default Home;
