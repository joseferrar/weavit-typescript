import React from "react";
import { useLocation } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import notebook from "../images/notebook.png";
import ellipsis from "../images/Ellipsis.png";
import spell from "../images/spell.png";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import { getData } from "../data/dummyData";
import OptionModal from "../components/Modals/OptionModal";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F2F4F5",
  ...theme.typography.body2,
  paddingLeft: theme.spacing(0),
  paddingRight: theme.spacing(0),
  textAlign: "center",
  borderRadius: 14,
  width: 360,
  height: 840,
}));

function PostList() {
  const location = useLocation();
  const data = location.state as any;
  console.log(data);
  return (
    <div style={{ marginLeft: 10 }}>
      <>
        <Grid
          container
          marginLeft={-2}
          marginTop={-1}
          style={{ display: "flex", width: 500, height: "100%" }}
        >
          <Avatar
            alt="Remy Sharp"
            src={spell}
            sx={{ width: 25, height: 25, marginTop: 0.5 }}
          />
          <Typography
            style={{
              marginLeft: 6,
              fontSize: 22,
              width: 400,
              fontFamily: "DMSans-Regular",
            }}
          >
            Your Thought Space
          </Typography>
        </Grid>
        <Grid marginLeft={2}>
          <Chip
            deleteIcon={<CloseIcon style={{ fontSize: 20 }} />}
            label={data.title}
            onDelete={() => console.warn("test")}
            style={{
              marginLeft: -40,
              marginRight: 50,
              marginTop: 14,
              fontFamily: "DMSans-Medium",
            }}
          />
          <Chip
            variant="outlined"
            deleteIcon={<CloseIcon style={{ fontSize: 20 }} />}
            label={"Clear All"}
            onDelete={() => console.warn("test")}
            style={{
              marginLeft: -40,
              marginRight: 50,
              marginTop: 14,
              fontFamily: "DMSans-Regular",
              color: "gray",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} marginTop={2} marginLeft={-4}>
          <Item elevation={0}>
            <Grid className="backgroundimges"></Grid>
            <Avatar
              sx={{
                width: 80,
                display: "inline-flex",
                height: 80,
                marginTop: -26,
              }}
              src={data.image}
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
              {data.title}
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
              {data.desc.map((sub: any, i: any) => (
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
                    <IconButton>
                      <Avatar
                        alt="Remy Sharp"
                        src={ellipsis}
                        sx={{ width: 25, height: 25 }}
                      />
                    </IconButton>
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
                      height: 30,
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

              {data.extra.map((sub: any, i: any) => (
                <Grid
                  key={i}
                  style={{
                    borderStyle: "solid",
                    borderRadius: 16,
                    borderWidth: 4,
                    marginTop: 12,
                    marginLeft: 12,
                    marginRight: 12,
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
                        paddingLeft: "8px",
                        fontFamily: "DMSans-Regular",
                      }}
                    >
                      {Object.values(sub).map((a: any) => a)}
                    </Typography>
                    <IconButton>
                      <Avatar
                        alt="Remy Sharp"
                        src={ellipsis}
                        sx={{ width: 25, height: 25 }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
            </div>
          </Item>
        </Grid>
      </>
    </div>
  );
}

export default PostList;
