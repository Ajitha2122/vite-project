import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ListItemText } from "@mui/material";
import Prof2 from "./Prof2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Page1() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4} sx={{ marginRight: "-110px" }}>
          <Item sx={{ height: "20vh", width: "20vh" }}>
            <ListItemText
              primary="1225"
              sx={{ fontWeight: "bold", fondSize: "1rem" }}
            />
            <ListItemText
              primary="followers"
              sx={{ fontWeight: "bold", fondSize: "1rem" }}
            />
          </Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4} sx={{ marginRight: "50px" }}>
          <Item sx={{ height: "20vh", width: "20vh" }}>
            <ListItemText
              primary="2334"
              sx={{ fontWeight: "bold", fondSize: "1rem" }}
            />
            <ListItemText
              primary="following"
              sx={{ fontWeight: "bold", fondSize: "1rem" }}
            />
            <Prof2 />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
