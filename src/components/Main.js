import axios from "axios";
import { Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import NameSearch from "./NameSearch";
import Results from "./Results";
import Context from "../context/Context";

function Main() {
  // states
  const [name, setName] = useState();
  const [gender, setGender] = useState({});
  const [age, setAge] = useState({});
  const [nation, setNation] = useState({});

  // api calls
  const getGender = function (input) {
    const url = "https://api.genderize.io/?name=" + input;
    axios.get(url).then((res) => {
      const responseData = res.data;
      responseData.probability = responseData.probability * 100;
      setGender(responseData);
    });
  };

  const getAge = function (input) {
    const url = "https://api.agify.io/?name=" + input;
    axios.get(url).then((res) => {
      const responseData = res.data;
      setAge(responseData);
    });
  };

  const getNation = function (input) {
    const url = "https://api.nationalize.io/?name=" + input;
    axios.get(url).then((res) => {
      const responseData = res.data;
      if (responseData.country.length === 1) {
        const duplicate = responseData.country[0];
        responseData.country.push(duplicate);
        responseData.country.push(duplicate);
      } else if (responseData.country.length === 2) {
        const duplicate = responseData.country[1];
        responseData.country.push(duplicate);
      }
      setNation(responseData);
    });
  };

  const getData = function (input) {
    setAge({});
    setGender({});
    setNation({ name: "test", country: [] });
    setTimeout(() => {
      getAge(input);
    }, 1000);
    setTimeout(() => {
      getGender(input);
    }, 1000);
    setTimeout(() => {
      getNation(input);
    }, 1000);
  };

  // exported data to context
  const data = { name, setName, gender, age, nation, getData };
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
