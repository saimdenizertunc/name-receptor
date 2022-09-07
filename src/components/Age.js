import { Card, CardContent, Divider, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Container } from "@mui/system";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

function Age({ age }) {
  const [progress, setProgress] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= age.age ? age.age : prevProgress + 1
      );
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Card sx={{ minWidth: 250 }} variant="outlined">
      <CardContent>
        <Typography
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: 14, textAlign: "center" }}
        >
          Age Prediction:
        </Typography>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 4 }}>
          <CircularProgressWithLabel value={progress} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default Age;
