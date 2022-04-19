import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SideLayout from "../Layouts/SideLayout";
import notebook from "../../images/notebook.png";
import ellipsis from "../../images/Ellipsis.png";
import { getData } from "../../data/dummyData";

function TimelineTab() {
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
              width={300}
              marginLeft={2}
              marginRight={2}
              marginTop={4}
              style={{ borderColor: "gray", borderWidth: 1, borderRadius: 22 }}
              key={i}
            >
              <Grid style={{ display: "flex", marginBottom: 10 }}>
                <Typography
                  variant="body2"
                  style={{
                    textAlign: "left",
                    fontSize: 14,
                    fontFamily: "DMSans-Medium",
                  }}
                >
                  {Object.values(sub).map((a) => a)}
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
        </Fragment>
      ))}
    </SideLayout>
  );
}

export default TimelineTab;
