import React, { Fragment, useState } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import notebook from "../../images/notebook.png";
import IconButton from "@mui/material/IconButton";
import ellipsis from "../../images/Ellipsis.png";
import { getData } from "../../data/dummyData";
import { CustomButton, NoteIcon } from "../../theme/MuiComponents";
import OptionModal from "../Modals/OptionModal";

function NoteCard() {
  const data = getData();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {data.map((item, index) => (
        <Fragment key={index}>
          <Typography
            variant="body2"
            style={{
              marginLeft: 20,
              textAlign: "left",
              fontSize: 16,
              fontFamily: "DMSans-Bold",
              marginTop: 21,
              marginBottom: 2,
            }}
          >
            {item.dateTime}
          </Typography>
          {item.desc.map((sub, i) => (
            <Grid
              key={i}
              style={{
                marginLeft: 10,
                marginRight: 10,
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
                    fontFamily: "DMSans-Regular",
                    fontSize: "12px",
                    fontWeight: "400",
                    lineHeight: "18px",
                    margin: "0 2px",
                    color: "black",
                    width: 260,
                    marginTop: 4,
                  }}
                >
                  {Object.values(sub).map((a) => a)}
                </Typography>
                <IconButton
                  onClick={handleClickOpen}
                  style={{ marginLeft: "auto" }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={ellipsis}
                    sx={{ width: 25, height: 25 }}
                  />
                </IconButton>
                <OptionModal
                  open={open}
                  handleClickOpen={handleClickOpen}
                  handleClose={handleClose}
                />
              </Grid>
              <Divider />
              <CustomButton
                color="inherit"
                variant="outlined"
                startIcon={<NoteIcon />}
              >
                Note Block
              </CustomButton>
            </Grid>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default NoteCard;
