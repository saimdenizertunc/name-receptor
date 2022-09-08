import { Card, CardContent, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

function Age({ age }) {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= age.age ? age.age : prevProgress + 1
      );
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, [age.age]);
  return (
    <Card sx={{ height: 150 }} variant="outlined">
      <CardContent>
        <Typography
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: 14, textAlign: "center" }}
        >
          Age Prediction (median)
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
        {progress && progress}
      </Box>
    </Card>
  );
}

export default Age;
