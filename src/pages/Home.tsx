import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ThoughtCard from "../components/Cards/ThoughtCard";

function Home() {
  const handleDelete = () => {
    console.log("just once");
  };

  return (
    <div>
      <Stack direction="row" spacing={1}>
        <Chip label="Jane Leforti" onDelete={handleDelete} />
        <Chip label="Netflix" onDelete={handleDelete} />
        <Chip label="Nato" onDelete={handleDelete} />
      </Stack>
      <Stack marginTop={2}>
        <ThoughtCard />
      </Stack>
    </div>
  );
}

export default Home;
