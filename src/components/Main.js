import axios from "axios";
import { Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NameSearch from "./NameSearch";
import Results from "./Results";
import Context from "../context/Context";

function Main() {
  // states
  const [name, setName] = useState();
  const [gender, setGender] = useState({
    name: "peter",
    gender: "male",
    probability: 0.99,
    count: 165452,
  });
  const [age, setAge] = useState({ name: "michael", age: 17, count: 233482 });
  const [nation, setNation] = useState({
    name: "michael",
    country: [
      { country_id: "US", probability: 0.08986482266532715 },
      { country_id: "AU", probability: 0.05976757527083082 },
      { country_id: "NZ", probability: 0.04666974820852911 },
    ],
  });

  // api calls
  function getGender(input) {
    const url = "https://api.genderize.io/?name=" + input;
    axios.get(url).then((res) => {
      const responseGender = res.data;
      setGender(responseGender);
    });
  }

  // exported data to context
  const data = { name, setName, gender, age, nation };
  return (
    <Context.Provider value={data}>
      <Typography
        variant="h6"
        textAlign="center"
        sx={{ padding: 1, marginTop: 4 }}
      >
        Predict Nationality, Gender and Age of a person given their name!
      </Typography>
      <Divider />
      <NameSearch />
      {name && <Results />}
    </Context.Provider>
  );
}

export default Main;
