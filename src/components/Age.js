import { Card, CardContent, Divider, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Container } from "@mui/system";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

function Age({ age }) {
  return (
    <Card sx={{ minWidth: 250 }} variant="outlined">
      <CardContent>
        <Typography
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: 14, textAlign: "center" }}
        >
          Age Prediction
        </Typography>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 4 }}>
          {age.age}
        </Box>
      </CardContent>
    </Card>
  );
}

export default Age;
