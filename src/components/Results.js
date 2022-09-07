import { Card, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useContext } from "react";
import Context from "../context/Context";
import Age from "./Age";
import Gender from "./Gender";
import Nation from "./Nation";

function Results() {
  const { gender, age, nation, name } = useContext(Context);
  return (
    <>
      <Typography variant="h6" textAlign="center">
        Prediction for: {name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 2,
          marginBottom: 4,
          marginTop: 5,
        }}
      >
        <Age age={age} />
        <Gender gender={gender} />
        <Nation nation={nation} />
      </Box>
    </>
  );
}

export default Results;
