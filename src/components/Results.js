import { Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Container } from "@mui/system";
import { useContext } from "react";
import Context from "../context/Context";
import Age from "./Age";
import Gender from "./Gender";
import MapTooltip from "./map/MapTooltip";

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
        }}
      >
        {age.age > 0 && <Age age={age} />}
        {gender.gender && <Gender gender={gender} />}
      </Box>
      {nation.country.length > 2 ? (
        <MapTooltip nation={nation} />
      ) : (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}

      <Box display="flex" justifyContent="center">
        <Button size="large" variant="contained">
          <Typography
            component="a"
            href="/"
            sx={{
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Try Again
          </Typography>
        </Button>
      </Box>
    </Container>
  );
}

export default Results;
