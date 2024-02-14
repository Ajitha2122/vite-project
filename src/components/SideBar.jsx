import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Drawer from "@mui/material/Drawer";
import ArticleIcon from "@mui/icons-material/Article";
import ClassIcon from "@mui/icons-material/Class";
import HomeRepairServiceSharpIcon from "@mui/icons-material/HomeRepairServiceSharp";
import CommentIcon from "@mui/icons-material/Comment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import Container from "@mui/material/Container";

function SideBar({ image, title }) {
  return (
    <>
      <Drawer width="drawerWidth" variant="permanent" anchor="left">
        <List>
          <ListItem>
            <img
              src={image}
              alt="side bar Logo"
              width={"50px"}
              height={"50px"}
              padding={"20px"}
              margin={"20px"}
            />

            <strong>{title}</strong>
          </ListItem>

          <ListItem>
            <ListItemIcon color="primary">
              <ArticleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText primary="Classes" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HomeRepairServiceSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Resources" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary="Learning Plan" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CommentIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <SettingsSuggestIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        <Divider />

        <Container sx={{}}>
          <Box
            sx={{
              bgcolor: "#E4E6E6",
              height: "25vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <List
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ListItemIcon>
                <FolderCopyIcon color="primary" />
              </ListItemIcon>
            </List>
            <p>
              Upgrade to <strong>PRO</strong> for more resources
            </p>

            <Button
              sx={{
                bgcolor: "BLUE",
                color: "white",
                height: "5vh",
                width: "5vh",
                justifyContent: "center",
              }}
            >
              UPGRAGE
            </Button>
          </Box>
        </Container>
      </Drawer>
    </>
  );
}
export default SideBar;
