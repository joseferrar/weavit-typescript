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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f7f7fb",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: 14,
  width: 350,
  height: "600px",
}));

function ThoughtCard(props: any) {
  console.log(props);
  return (
    <Grid item xs={12} sm={4} md={4} marginTop={4} marginLeft={4}>
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
        {props.item.desc.map((sub: any, i: any) => (
          <Grid
            key={i}
            style={{
              borderStyle: "solid",
              borderRadius: 12,
              borderWidth: 4,
              marginTop: 12,
              backgroundColor: "#fff",
              borderColor: "#fff",
              padding: 4,
            }}
          >
            <Grid style={{ display: "flex", marginBottom: 10 }}>
              <Typography
                variant="body2"
                style={{
                  textAlign: "left",
                  paddingLeft: "12px",
                  fontFamily: "DMSans-Regular",
                }}
              >
                {Object.values(sub).map((a: any) => a)}
              </Typography>
              <Avatar
                alt="Remy Sharp"
                src={ellipsis}
                sx={{ width: 25, height: 25 }}
              />
            </Grid>
            <Divider />
            <Button
              onClick={() => alert("test click")}
              variant="outlined"
              startIcon={
                <Avatar
                  alt="Remy Sharp"
                  src={notebook}
                  sx={{ width: 15, height: 15 }}
                />
              }
              style={{
                userSelect: "none",
                borderRadius: 16,
                color: "gray",
                borderColor: "gray",
                textTransform: "capitalize",
                display: "flex",
                marginTop: 12,
                height: 32,
                marginBottom: 12,
                WebkitTouchCallout: "none",
                marginLeft: 8,
                fontSize: 12,
                fontFamily: "DMSans-Regular",
              }}
            >
              Note Block
            </Button>
          </Grid>
        ))}
      </Item>
    </Grid>
  );
}

export default ThoughtCard;
