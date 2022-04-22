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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import filelogo from "../../images/filelogo.png";
import imglogo from "../../images/imaglogo.png";

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
        <div style={{ overflowY: "scroll", height: 550 }}>
          {props.item.desc.map((sub: any, i: any) => (
            <Grid
              key={i}
              style={{
                boxShadow: "rgb(241 241 245) 5px 5px 5px 5px",
                borderStyle: "solid",
                borderRadius: 12,
                borderWidth: 4,
                marginTop: 12,
                marginLeft: 12,
                marginRight: 12,
                backgroundColor: "#fff",
                borderColor: "#fff",
                padding: 4,
              }}
            >
              <List
                sx={{
                  width: "100%",
                  borderStyle: "solid",
                  borderWidth: 1.8,
                  borderRadius: 6,
                  height: 80,
                  marginBottom: 1,
                  backgroundColor: "#fff",
                  borderColor: "#F0F3F6",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        bgcolor: "#fff",
                        width: 50,
                        height: 50,
                        fontWeight: "bold",
                        color: "blue",
                        borderWidth: 0,
                        borderStyle: "solid",
                        borderColor: "#fff",
                      }}
                      src={props.item.id ===  2 ? imglogo : filelogo}
                      alt="B"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        style={{
                          textAlign: "left",
                          paddingLeft: "2px",
                          fontFamily: "DMSans-bold",
                        }}
                      >
                        Getting thing Done
                      </Typography>
                    }
                    secondary={
                      <a
                        href="https://www.npmjs.com/package/react-paginate"
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        JPG file . 443.0 KB
                      </a>
                    }
                  />
                </ListItem>
              </List>
              <Grid style={{ display: "flex", marginBottom: 10 }}>
                <Typography
                  variant="body2"
                  style={{
                    textAlign: "left",
                    paddingLeft: "8px",
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
        </div>
      </Item>
    </Grid>
  );
}

export default ThoughtCard;
