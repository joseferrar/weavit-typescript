import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SideLayout from "../Layouts/SideLayout";
import { getData } from "../../data/dummyData";

function TimelineTab() {
  const data = getData();
  return (
    <SideLayout>
      <Typography
        fontWeight="bold"
        fontSize={26}
        textAlign="left"
        marginLeft={2}
        marginTop={2}
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
              marginTop: 20,
              marginBottom: 2,
            }}
          >
            {item.dateTime}
          </Typography>
          {item.desc.map((sub, i) => (
            <Grid
              width={250}
              marginLeft={2}
              marginRight={2}
              marginTop={4}
              key={i}
            >
              <Grid style={{ display: "flex", marginBottom: 10 }}>
                <Typography
                  variant="body2"
                  style={{ textAlign: "left", fontSize: 12 }}
                >
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
        </Fragment>
      ))}
    </SideLayout>
  );
}

export default TimelineTab;
