import { Card, CardContent, Divider, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Container } from "@mui/system";
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
  const prob = gender.probability * 100;
  const [progress, setProgress] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= prob ? prob : prevProgress + 2
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
            <Box>
              <MaleIcon color="primary" sx={{ marginTop: 1, marginRight: 1 }} />
              <CircularProgressWithLabel value={progress} />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FemaleIcon
                color="primary"
                sx={{ marginTop: 1, marginRight: 1 }}
              />
              <CircularProgressWithLabel value={progress} />
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default Gender;
