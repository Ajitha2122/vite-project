import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Layout from "./Layout";
import Gallery from "./Gallery";
import Follow from "./Follow";
import FollowerIcon from "./FollowerIcon";
import BadgeIcon from "@mui/icons-material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CollectionsIcon from "@mui/icons-material/Collections";
import Prof1 from "./prof1";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Profile" icon={<BadgeIcon />} value="1" />
            <Tab label="Folowers" icon={<FavoriteIcon />} value="2" />
            <Tab label="Gallery" icon={<CollectionsIcon />} value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Prof1 />
        </TabPanel>
        <TabPanel value="2">
          <FollowerIcon />
        </TabPanel>
        <TabPanel value="3">
          <Gallery />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
