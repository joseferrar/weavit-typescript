import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import notebook from "../images/notebook.png";
import ellipsis from "../images/Ellipsis.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { getData } from "../data/dummyData";
import filelogo from "../images/filelogo.png";
import imglogo from "../images/imaglogo.png";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function MtSlider() {
  const data = getData()
  const [post, setPost] = React.useState(data)
  
  const itemRenderer = (item: any, index: number): JSX.Element => {
    return (
      <div className="item">
       <div key={index} style={{ marginTop: 30, marginLeft: -22 }}>
       <Grid item xs={12} sm={4} md={4} marginTop={10} marginLeft={4}>
          <Paper elevation={3}>
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
                marginTop: -6,
              }}
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
              {item.title}
            </Typography>
            <Grid style={{ display: "inline-flex", color: "gray" }}>
              <Typography
                style={{
                  fontSize: 14,
                  marginTop: 6,
                  fontFamily: "DMSans-Regular",
                }}
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
                style={{
                  fontSize: 14,
                  marginTop: 6,
                  fontFamily: "DMSans-Regular",
                }}
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
              <Grid
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
                        src={filelogo}
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
                  {item.description}
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
            </div>
          </Paper>
        </Grid>
      </div>
      </div>
    );
  };

  const handleRLDDChange = (reorderedItems: any) => {
    // console.log('Example.handleRLDDChange');
    setPost(reorderedItems);
  };
  return (
    <Carousel>
      <div style={{ display: "flex" }}>
      


        <RLDD
          cssClasses="example-list-container"
          layout="horizontal"
          items={post}
          itemRenderer={itemRenderer}
          onChange={handleRLDDChange}
        />

      </div>
      <div>
        <div style={{ height: 400, width: 400, background: "blue" }} />
      </div>
      <div>
        <div style={{ height: 400, width: 400, background: "yellow" }} />
      </div>
    </Carousel>
  );
}

export default MtSlider;
