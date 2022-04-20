import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SideLayout from "../Layouts/SideLayout";
import notebook from "../../images/notebook.png";
import ellipsis from "../../images/Ellipsis.png";
import { getData } from "../../data/dummyData";

function TimelineTab() {
  const navigate = useNavigate();
  const data = getData();

  return (
    <SideLayout>
      <Typography
        fontSize={26}
        textAlign="left"
        marginLeft={2}
        marginTop={2}
        fontFamily="DMSans-Bold"
      >
        Timeline
      </Typography>
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
                boxShadow: "rgb(241 241 245) 5px 5px 5px 5px",
                marginLeft: 12,
                marginRight: 12,
                borderStyle: "solid",
                borderRadius: 12,
                borderWidth: 4,
                marginTop: 12,
                backgroundColor: "#fff",
                borderColor: "#fff",
                padding: 4,
              }}
            >
              <Grid style={{ display: "flex", marginBottom: 10, paddingLeft: 8 }}>
                <Typography
                  variant="body2"
                  style={{
                    textAlign: "left",
                    fontSize: 12,
                    fontFamily: "DMSans-Medium",
                    width: 340
                  }}
                >
                  {Object.values(sub).map((a) => a)}
                </Typography>
                <Avatar
                  alt="Remy Sharp"
                  src={ellipsis}
                  sx={{ width: 25, height: 25, marginLeft: "auto" }}
                />
              </Grid>
              <Divider />
              <Button
                onClick={() => navigate('about', {state: item.id})}
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
        </Fragment>
      ))}
    </SideLayout>
  );
}

export default TimelineTab;
