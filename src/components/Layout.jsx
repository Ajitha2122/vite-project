import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Breadcrumbs,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import { blue } from "@mui/material/colors";
import LabTabs from "./Page1";
import BreadCrums from "./BreadCrums";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Layout({ icon, image, Bread }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={100} md={8}>
          <Item
            style={{
              position: "sticky",
              top: 0,
              height: "10vh",
              width: "150vh",
              marginTop: "-80vh",
              marginLeft: "50vh",
            }}
          >
            <List>
              <ListItem>
                <ListItemIcon>{icon}</ListItemIcon>
              </ListItem>
            </List>
          </Item>
        </Grid>
        <Grid item xs={100} md={8}>
          <Item
            style={{
              position: "sticky",
              top: 0,
              height: "10vh",
              width: "150vh",
              marginTop: "-15vh",
              marginLeft: "50vh",
            }}
          >
            <ListItemText
              primary="profile"
              primaryTypographyProps={{
                style: {
                  fontSize: "1rem", // Set your desired font size
                  fontWeight: "bold", // Make the text bold
                  marginLeft: "-20px",
                },
              }}
            />
            <BreadCrums />
          </Item>
        </Grid>
        <Grid item xs={100} md={8} sx={{ justifyContent: "center" }}>
          <Item
            style={{
              position: "sticky",
              top: 0,
              width: "150vh",
              marginTop: "-5vh",
              marginLeft: "50vh",
              backgroundColor: "green",
            }}
          >
            <Avatar
              src="/broken-image.jpg"
              sx={{ width: "10vh", height: "10vh", marginTop: "30px" }}
            />
            <ListItemText
              primary="Ajitha Jeeva"
              primaryTypographyProps={{
                style: {
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "white",
                  marginTop: "-60px",
                },
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={100} md={8} sx={{ marginLeft: "50vh" }}>
          <LabTabs />
        </Grid>
      </Grid>
    </Box>
  );
}
