import { Typography } from "@mui/material";
import React, { useState } from "react";
import NameSearch from "./NameSearch";
import Results from "./Results";
import Context from "../context/Context";

function Main() {
  const [name, setName] = useState();
  const data = { name, setName };
  return (
    <Context.Provider value={data}>
      <Typography
        variant="h6"
        textAlign="center"
        sx={{ padding: 1, marginTop: 4 }}
      >
        Predict Nationality, Gender and Age of a person given their name!
      </Typography>
      <NameSearch />
      {name && <Results name={name} />}
    </Context.Provider>
  );
}

export default Main;
