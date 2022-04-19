import React from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import SearchInput from "../Inputs/SearchInput";
import SideLayout from "../Layouts/SideLayout";

function Search() {
  return (
    <SideLayout>
      <SearchInput />
      <Stack direction="row" spacing={-2} marginTop={2}>
      <Typography
        style={{
          fontSize: 22,
          textAlign: "left",
          marginLeft: 18,
          marginTop: 12,
          fontFamily: "DMSans-Medium",
        }}
      >
        Result
      </Typography>
      <Chip
            label={"See All (22)"}
  
            style={{
              marginLeft: "auto",
              marginTop: 14,
              fontFamily: "DMSans-Medium",
            }}
          />
      </Stack>
    </SideLayout>
  );
}

export default Search;
