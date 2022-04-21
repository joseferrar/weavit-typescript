import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import notebook from "../../images/notebook.png";
import ellipsis from "../../images/Ellipsis.png";
import NoteCard from "./NoteCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f7f7fb",
  ...theme.typography.body2,
  paddingLeft: theme.spacing(0),
  paddingRight: theme.spacing(0),
  textAlign: "center",
  borderRadius: 14,
  width: 360,
  height: 800,
}));

function ThoughtCard(props: any) {
  return (
    <Grid item xs={12} sm={4} md={4} marginTop={6} marginLeft={4}>
      <Item elevation={3}>
        <Grid
          style={{
            background:
              "linear-gradient(129.37deg, rgba(32, 0, 173, 0.5) -12.98%, rgba(57, 137, 238, 0.5) 91.72%)",
            marginTop: -16,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
            padding: 35,
            clipPath:
              "polygon(50% 0%, 100% 0, 100% 100%, 50% 70%, 0 100%, 0 0)",
          }}
        ></Grid>
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
          src={props.item.image}
          alt="B"
        />

        <Typography
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 6,
            fontFamily: "DMSans-Medium",
          }}
        >
          {props.item.title}
        </Typography>
        <Grid style={{ display: "inline-flex", color: "gray" }}>
          <Typography
            style={{ fontSize: 14, marginTop: 6, fontFamily: "DMSans-Regular" }}
          >
            {"<Time>"}
          </Typography>
          <Typography
            style={{
              fontSize: 14,
              marginTop: 6,
              marginLeft: 6,
              fontFamily: "DMSans-Regular",
            }}
          >
            {"<Calender Name>"}
          </Typography>
        </Grid>
        <br />
        <Grid style={{ display: "inline-flex", color: "gray" }}>
          <Typography
            style={{ fontSize: 14, marginTop: 6, fontFamily: "DMSans-Regular" }}
          >
            {"<Location>"}
          </Typography>
          <Typography
            style={{
              fontSize: 14,
              marginTop: 6,
              marginLeft: 6,
              fontFamily: "DMSans-Regular",
            }}
          >
            {"<Status>"}
          </Typography>
        </Grid>
        <div style={{ overflowY: "scroll", height: 550, }}>
          <NoteCard />
        </div>
      </Item>
    </Grid>
  );
}

export default ThoughtCard;
