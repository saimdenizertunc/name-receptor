import { Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";

function Nation({ nation }) {
  return (
    <Card sx={{ minWidth: 250 }} variant="outlined">
      <CardContent>
        <Typography
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: 14, textAlign: "center" }}
        >
          Nationality Prediction
        </Typography>
        <Divider />
      </CardContent>
    </Card>
  );
}

export default Nation;
