import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import imgB from "../assets/Gall1.png";
import imgP from "../assets/Gall2.jpg";
import { ListItem } from "@mui/material";
import List from "@mui/material/List";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item
            style={{
              position: "sticky",
              top: 0,
              height: "40vh",
              width: "50vh",
            }}
          >
            <img
              src={imgB}
              alt="purple images"
              sx={{ height: "180px", weight: "5px" }}
            />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <List>
            <ListItem
              style={{
                position: "sticky",
                top: 0,
                height: "30vh",
                width: "50vh",
              }}
            >
              <img
                src={imgP}
                alt="pink images"
                sx={{ height: "150px", weight: "5px" }}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
