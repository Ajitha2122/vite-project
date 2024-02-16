import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CollectionsIcon from "@mui/icons-material/Collections";

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
              height: "30vh",
              width: "80vh",
              marginTop: "-12vh",
              marginLeft: "30vh",
            }}
          >
            share what you are thinking here....
            <Button
              variant="text"
              sx={{ marginTop: "150px", marginRight: "250px" }}
            >
              <CollectionsIcon />
              Image/video
            </Button>
            <Button variant="contained" sx={{ marginTop: "100PX" }}>
              Post
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
