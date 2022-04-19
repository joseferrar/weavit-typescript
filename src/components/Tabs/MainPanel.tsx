import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";
import InboxIcon from "@mui/icons-material/Inbox";
import SearchIcon from "@mui/icons-material/Search";
import TimelineIcon from "@mui/icons-material/Timeline";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TimelineTab from "./TimeLine";
import InboxTab from "./Inbox";
import SearchTab from "./Search";
import ProfileTab from "./Profile";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MainPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <TabPanel value={value} index={0}>
        <TimelineTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InboxTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SearchTab />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProfileTab />
      </TabPanel>
      <Box sx={{ width: 340, position: "fixed", left: 0, bottom: 10, marginLeft: 1.5 }}>
        <Box>
          <Tabs
            textColor="secondary"
            component={Paper}
            elevation={4}
            style={{ borderRadius: 20, marginLeft: 5, marginRight: 5 }}
            value={value}
            onChange={handleChange}
          >
            <Tab
              label={
                <Typography
                  style={{ textTransform: "capitalize", fontSize: 14, fontFamily: "DMSans-Medium" }}
                >
                  Timeline
                </Typography>
              }
              icon={<TimelineIcon style={{ width: 20 }} />}
              {...a11yProps(0)}
            />
            <Tab
              style={{ marginLeft: -10 }}
              label={
                <Typography
                  style={{ textTransform: "capitalize", fontSize: 14, fontFamily: "DMSans-Medium" }}
                >
                  Inbox
                </Typography>
              }
              icon={<InboxIcon style={{ width: 20 }} />}
              {...a11yProps(1)}
            />
            <Tab
              style={{ marginLeft: -10 }}
              label={
                <Typography
                  style={{ textTransform: "capitalize", fontSize: 14, fontFamily: "DMSans-Medium" }}
                >
                  Search
                </Typography>
              }
              icon={<SearchIcon style={{ width: 20 }} />}
              {...a11yProps(2)}
            />
            <Tab
              style={{ marginLeft: -10 }}
              label={
                <Typography
                  style={{ textTransform: "capitalize", fontSize: 14, fontFamily: "DMSans-Medium" }}
                >
                  Profile
                </Typography>
              }
              icon={<PersonIcon style={{ width: 20 }} />}
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
      </Box>
    </Fragment>
  );
}
