import axios from "axios";
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
        responseData.country.push({
          country_id: "-",
          probability: 0,
        });
        responseData.country.push({
          country_id: "-",
          probability: 0,
        });
      } else if (responseData.country.length === 2) {
        responseData.country.push({
          country_id: "-",
          probability: 0,
        });
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
      {!name && <NameSearch />}
      {name && <Results />}
    </Context.Provider>
  );
}

export default Main;
