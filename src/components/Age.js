import styled from "@emotion/styled";
import {
  Card,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Age({ age }) {
  const [progress, setProgress] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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
    <Card sx={{ height: 150 }} variant="outlined">
      <CardContent>
        <Typography
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: 14, textAlign: "center" }}
        >
          Age Prediction
        </Typography>
        <Divider />
      </CardContent>
      <Box
        sx={{
          display: "flex",
          paddingTop: 2,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {progress ? progress : "Not Found"}
      </Box>
    </Card>
  );
}

export default Age;
