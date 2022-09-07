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
    const example_response = {
      name: "peter",
      gender: "male",
      probability: 0.56,
      count: 165452,
    };
    const url = "https://api.genderize.io/?name=" + input;
    axios.get(url).then((res) => {
      const responseData = res.data;
      responseData.probability = responseData.probability * 100;
      setGender(responseData);
    });
  };

  const getAge = function (input) {
    const example_response = { name: "michael", age: 17, count: 233482 };
    const url = "https://api.agify.io/?name=" + input;
    axios.get(url).then((res) => {
      const responseData = res.data;
      responseData.age = responseData.age - 14;
      setAge(responseData);
    });
  };

  const getNation = function (input) {
    const example_response = {
      name: "michael",
      country: [
        { country_id: "US", probability: 0.08986482266532715 },
        { country_id: "AU", probability: 0.05976757527083082 },
        { country_id: "NZ", probability: 0.04666974820852911 },
      ],
    };
    const url = "https://api.nationalize.io/?name=" + input;
    axios.get(url).then((res) => {
      const responseData = res.data;
      const l = responseData.country.length;
      responseData.l = l;
      setNation(responseData);
    });
  };

  const getData = function (input) {
    setAge({});
    setGender({});
    setNation({ name: "ayşe", country: [] });
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
