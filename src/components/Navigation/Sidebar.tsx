import React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import MainPanel from "../Tabs/MainPanel";
import logo from "../../images/logo.jpg";

const Sidebar = () => {
  return (
    <div>
      <Stack
        direction="column"
        spacing={1}
        marginTop={0}
        marginLeft={2}
        marginBottom={3}
      >
        <Avatar alt="logo" src={logo} sx={{ width: 120, height: 120 }} />
      </Stack>

      <List>
        <MainPanel />
      </List>
    </div>
  );
};

Sidebar.propTypes = {
  setMobileOpen: PropTypes.func,
};

export default Sidebar;
