import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import SettingsIcon from "@mui/icons-material/Settings";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import InfoIcon from "@mui/icons-material/Info";
import FeedIcon from "@mui/icons-material/Feed";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function ProfileTab() {
  return (
    <div>
      <h2>Profile</h2>
      <div className="row">
        <Button
          startIcon={<SettingsIcon />}
          className="sidebarbtn"
          color="secondary"
          variant="outlined"
          endIcon={<ArrowRightAltIcon />}
        >
          <span style={{ paddingRight: "140px" }}> Setting</span>
        </Button>
      </div>
      <br></br>
      <div className="row">
        <Button
          startIcon={<LockOpenIcon />}
          className="sidebarbtn"
          color="secondary"
          variant="outlined"
          endIcon={<ArrowRightAltIcon />}
        >
          <span style={{ paddingRight: "85px" }}> Privacy Policy</span>
        </Button>
      </div>
      <br></br>
      <div className="row">
        <Button
          startIcon={<InfoIcon />}
          className="sidebarbtn"
          color="secondary"
          variant="outlined"
          endIcon={<ArrowRightAltIcon />}
        >
          <span style={{ paddingRight: "96px" }}> About Weavit</span>
        </Button>
      </div>
      <br></br>
      <div className="row">
        <Button
          startIcon={<FeedIcon />}
          className="sidebarbtn"
          color="secondary"
          variant="outlined"
          endIcon={<ArrowRightAltIcon />}
        >
          <span style={{ paddingRight: "30px" }}> Terms and Conditions</span>
        </Button>
      </div>
      <br></br>

      <div className="row">
        <Button
          startIcon={<ExitToAppIcon />}
          style={{ border: "1px solid red" }}
          className="sidebarbtn"
          color="secondary"
          variant="outlined"
          endIcon={<ArrowRightAltIcon />}
        >
          <span style={{ paddingRight: "134px" }}> Sign Out</span>
        </Button>
      </div>
    </div>
  );
}

export default ProfileTab;
