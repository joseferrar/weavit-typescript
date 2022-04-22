import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import notebook from "../../images/notebook.png";
import ellipsis from "../../images/Ellipsis.png";
import { getData } from "../../data/dummyData";

function NoteCard() {
  const data = getData();
  return (
    <div>
      {data.map((item, index) => (
        <Fragment key={index}>
          <Typography
            variant="body2"
            style={{
              marginLeft: 18,
              textAlign: "left",
              fontSize: 16,
              fontWeight: "bold",
              fontFamily: "DMSans-Medium",
              marginTop: 20,
              marginBottom: 2,
            }}
          >
            {item.dateTime}
          </Typography>
          {item.desc.map((sub, i) => (
            <Grid
              key={i}
              style={{
                marginLeft: 12,
                marginRight: 12,
                borderRadius: 16,
                marginTop: 12,
                backgroundColor: "#fff",
                padding: 4,
              }}
            >
              <Grid
                style={{ display: "flex", marginBottom: 10, paddingLeft: 8 }}
              >
                <Typography
                  variant="body2"
                  style={{
                    textAlign: "left",
                    fontSize: 12,
                    fontWeight: 500,
                    fontFamily: "DMSans-Medium",
                    width: 300,
                    marginTop: 4
                  }}
                >
                  {Object.values(sub).map((a) => a)}
                </Typography>
                <Avatar
                  alt="Remy Sharp"
                  src={ellipsis}
                  sx={{ width: 25, height: 25, marginLeft: "auto", marginRight: 1, top: 4}}
                />
              </Grid>
              <Divider />
              <Button
                // onClick={() => navigate('about', {state: item.id})}
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
        </Fragment>
      ))}
    </div>
  );
}

export default NoteCard;
