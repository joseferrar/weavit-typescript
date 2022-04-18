import React, { useState } from "react";
import DraggableList from "react-draggable-lists";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { getData } from "../../data/dummyData";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: 14,
  width: 400,
}));

function ThoughtCard() {
  const data = getData();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <DraggableList width={500} height={150} rowSize={3}>
          {data.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              key={index}
              marginTop={4}
              marginLeft={4}
            >
              <Item elevation={3}>
                <Grid
                  style={{
                    background:
                      "linear-gradient(129.37deg, rgba(32, 0, 173, 0.5) -12.98%, rgba(57, 137, 238, 0.5) 91.72%)",
                    marginTop: -16,
                    borderEndStartRadius: 60,
                    borderEndEndRadius: 60,
                    padding: 22,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#85CEFF",
                      width: 80,
                      display: "inline-flex",
                      height: 80,
                      fontWeight: "bold",
                      color: "blue",
                      borderWidth: 2,
                      borderStyle: "solid",
                      borderColor: "#fff",
                    }}
                    src={item.image}
                    alt="B"
                  />
                </Grid>
                <Typography
                  style={{ fontWeight: "bold", fontSize: 20, marginTop: 6 }}
                >
                  {item.title}
                </Typography>
                <Grid style={{ display: "inline-flex", color: "gray" }}>
                  <Typography style={{ fontSize: 14, marginTop: 6 }}>
                    {"<Time>"}
                  </Typography>
                  <Typography
                    style={{ fontSize: 14, marginTop: 6, marginLeft: 6 }}
                  >
                    {"<Calender Name>"}
                  </Typography>
                </Grid>
                <br />
                <Grid style={{ display: "inline-flex", color: "gray" }}>
                  <Typography style={{ fontSize: 14, marginTop: 6 }}>
                    {"<Location>"}
                  </Typography>
                  <Typography
                    style={{ fontSize: 14, marginTop: 6, marginLeft: 6 }}
                  >
                    {"<Status>"}
                  </Typography>
                </Grid>
                {item.desc.map((sub, i) => (
                  <Grid key={i}>
                    <Grid style={{ display: "flex", marginBottom: 10 }}>
                      <Typography variant="body2" style={{ textAlign: "left" }}>
                        {Object.values(sub).map((a) => a)}
                      </Typography>
                      <MoreHorizIcon
                        style={{
                          marginLeft: "auto",
                          backgroundColor: "#dde7e7",
                          borderRadius: 12,
                        }}
                      />
                    </Grid>
                    <Divider />
                    <Button
                      variant="outlined"
                      startIcon={<MenuBookOutlinedIcon />}
                      style={{
                        borderRadius: 16,
                        color: "gray",
                        borderColor: "gray",
                        textTransform: "capitalize",
                        display: "flex",
                        marginTop: 12,
                        height: 32,
                        marginBottom: 12,
                      }}
                    >
                      Note Block
                    </Button>
                  </Grid>
                ))}
              </Item>
            </Grid>
          ))}
        </DraggableList>
      </Grid>
    </Box>
  );
}

export default ThoughtCard;
