import { Card, CardContent, Divider, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

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
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

function Gender({ gender }) {
  const [progress, setProgress] = useState(10);
  const [progress2, setProgress2] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= gender.probability
          ? gender.probability
          : prevProgress + 5
      );
    }, 100);
    return () => {
      clearInterval(timer);
    };
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress2((prevProgress) =>
        prevProgress >= 100 - gender.probability
          ? 100 - gender.probability
          : prevProgress + 1
      );
    }, 100);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <Card sx={{ height: 150 }} variant="outlined">
      <CardContent>
        <Typography
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: 14, textAlign: "center" }}
        >
          Gender Prediction
        </Typography>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: 4,
            flexDirection: "row",
            gap: 3,
          }}
        >
          {" "}
          {gender.gender === "male" ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <MaleIcon color="primary" sx={{ marginTop: 1 }} />
              <CircularProgressWithLabel value={progress} />
              <FemaleIcon color="primary" sx={{ marginTop: 1 }} />
              <CircularProgressWithLabel value={progress2} />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                gap: 1,
              }}
            >
              <FemaleIcon color="primary" sx={{ marginTop: 1 }} />
              <CircularProgressWithLabel value={progress} />
              <MaleIcon color="primary" sx={{ marginTop: 1 }} />
              <CircularProgressWithLabel value={progress2} />
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default Gender;
