import {
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import names from "../countrydata/names";

function Nation({ nation }) {
  const [other] = useState(names[nation.country[2].country_id]);
  const [other2] = useState(names[nation.country[1].country_id]);
  return (
    <Card sx={{ height: 300 }} variant="outlined">
      <CardContent>
        <Typography
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: 14, textAlign: "center" }}
        >
          Nationality Prediction
        </Typography>
        <Divider />

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemText
              primary={names[nation.country[0].country_id]}
              secondary={
                (nation.country[0].probability * 100).toFixed(1) + " %"
              }
              sx={{ textAlign: "center" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={!other2 ? "Other" : names[nation.country[1].country_id]}
              secondary={
                (nation.country[1].probability * 100).toFixed(1) + " %"
              }
              sx={{ textAlign: "center" }}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={!other ? "Other" : names[nation.country[2].country_id]}
              secondary={
                (nation.country[2].probability * 100).toFixed(1) + " %"
              }
              sx={{ textAlign: "center" }}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default Nation;
