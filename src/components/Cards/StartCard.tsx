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
import add from "../../images/add.png";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import Getting from "../../images/Getting.png";
import pencil from "../../images/pencil.png";
import { getData } from "../../data/dummyData";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F2F4F5",
  ...theme.typography.body2,
  paddingLeft: theme.spacing(0),
  paddingRight: theme.spacing(0),
  textAlign: "center",
  borderRadius: 14,
  width: 360,
  height: 800,
}));

function StartCard() {
  const data = getData();

  return (
    <div>
      {data.map(
        (item, index) =>
          index === 1 && (
            <>
              {/* <Chip
                deleteIcon={<CloseIcon style={{ fontSize: 20 }} />}
                label={item.title}
                onDelete={() => console.warn("test")}
                style={{
                  marginLeft: 40,
                  marginRight: 50,
                  marginTop: 14,
                  fontFamily: "DMSans-Medium",
                }}
              />
              <Chip
                variant="outlined"
                deleteIcon={
                  <Avatar
                    alt="Remy Sharp"
                    src={add}
                    sx={{ width: 22, height: 22 }}
                  />
                }
                label={"Clear All"}
                onDelete={() => console.warn("test")}
                style={{
                  marginLeft: -40,
                  marginRight: 50,
                  marginTop: 14,
                  fontFamily: "DMSans-Regular",
                  color: "gray",
                }}
              /> */}
              <Grid item xs={12} sm={4} md={4} marginTop={4} marginLeft={4}>
                <Item elevation={0}>
                  <Grid className="backgroundimges"></Grid>
                  <Avatar
                    sx={{
                      width: 80,
                      display: "inline-flex",
                      height: 80,
                      marginTop: -26,
                    }}
                    src={pencil}
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
                    ✨ Getting Started
                  </Typography>
                  <Grid style={{ display: "inline-flex", color: "gray" }}>
                    <Typography
                      style={{
                        fontSize: 14,
                        marginTop: 6,
                        fontFamily: "DMSans-Regular",
                      }}
                    >
                      {"<Time Created>"}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: 14,
                        marginTop: 6,
                        marginLeft: 6,
                        fontFamily: "DMSans-Regular",
                      }}
                    >
                      {"<Date Created>"}
                    </Typography>
                  </Grid>
              
                  <div style={{ overflowY: "scroll", height: 550 }}>
                    {item.desc.map((sub: any, i: any) => (
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
                        <Typography
                          style={{
                            textAlign: "left",
                            fontWeight: "bold",
                            fontSize: 20,
                            marginBottom: 12,
                            fontFamily: "DMSans-Medium",
                          }}
                        >
                          ✨ Getting Started
                        </Typography>
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
                      </Grid>
                    ))}

                    <div style={{ marginLeft: 14 }}>
                      <Divider
                        orientation="vertical"
                        style={{ display: "initial" }}
                      />

                      <Grid
                        style={{
                          borderStyle: "solid",
                          borderRadius: 16,
                          borderWidth: 4,
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
                            Recite what you know soa you can truly learn it.
                            Jane agrees
                          </Typography>
                          <Avatar
                            alt="Remy Sharp"
                            src={ellipsis}
                            sx={{ width: 25, height: 25 }}
                          />
                        </Grid>
                      </Grid>

                      <Divider
                        orientation="vertical"
                        style={{ display: "initial" }}
                      />

                      <Grid
                        style={{
                          borderStyle: "solid",
                          borderRadius: 16,
                          borderWidth: 4,
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
                            Recite what you know soa you can truly learn it.
                            Jane agrees
                          </Typography>
                          <Avatar
                            alt="Remy Sharp"
                            src={ellipsis}
                            sx={{ width: 25, height: 25 }}
                          />
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Item>
              </Grid>
            </>
          )
      )}
    </div>
  );
}

export default StartCard;
