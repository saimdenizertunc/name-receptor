import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Container } from "@mui/system";
import { useContext } from "react";
import Context from "../context/Context";
import Age from "./Age";
import Gender from "./Gender";
import Nation from "./Nation";

function Results() {
  const { gender, age, nation, name } = useContext(Context);

  return (
    <Container>
      <Typography variant="h6" textAlign="center">
        Prediction for {name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginBottom: 4,
          marginTop: 5,
        }}
      >
        {age.age > 0 ? <Age age={age} /> : <CircularProgress />}
        {gender.gender ? <Gender gender={gender} /> : <CircularProgress />}
        {nation.country.length > 2 ? (
          <Nation nation={nation} />
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Container>
  );
}

export default Results;
