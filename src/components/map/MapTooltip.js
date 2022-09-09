import React, { useState } from "react";
import Map from "./Map";
import ReactTooltip from "react-tooltip";
import { Box, Typography } from "@mui/material";
import names from "../../countrydata/names.json";
const getCountryISO3 = require("country-iso-2-to-3");

function MapTooltip({ nation }) {
  const [content, setContent] = useState("");
  const setInitialInfo = () => {
    const temp = {};
    temp.name = nation.name;
    temp.country = [];
    const first = {};
    first.country_id = getCountryISO3(nation.country[0].country_id);
    first.probability = Number(nation.country[0].probability.toFixed(2));
    temp.country.push(first);
    const second = {};
    second.country_id = getCountryISO3(nation.country[1].country_id);
    second.probability = Number(nation.country[1].probability.toFixed(2));
    temp.country.push(second);
    const third = {};
    third.country_id = getCountryISO3(nation.country[2].country_id);
    third.probability = Number(nation.country[2].probability.toFixed(2));
    temp.country.push(third);
    return temp;
  };
  const [info] = useState(setInitialInfo);
  const [other] = useState(names[nation.country[2].country_id]);
  const [other2] = useState(names[nation.country[1].country_id]);

  return (
    <Box>
      <Box display="flex" justifyContent="space-around">
        <Box>
          <Typography gutterBottom>
            {names[nation.country[0].country_id]}{" "}
            {(nation.country[0].probability * 100).toFixed(1) + " %"}
          </Typography>
        </Box>
        <Box>
          <Typography gutterBottom>
            {!other2 ? "Other" : names[nation.country[1].country_id]}
            {(nation.country[1].probability * 100).toFixed(1) + " %"}
          </Typography>
        </Box>
        <Box>
          <Typography gutterBottom>
            {!other ? "Other" : names[nation.country[2].country_id]}
            {(nation.country[2].probability * 100).toFixed(1) + " %"}
          </Typography>
        </Box>
      </Box>

      <Map setTooltipContent={setContent} info={info} />
      <ReactTooltip>{content}</ReactTooltip>
    </Box>
  );
}

export default MapTooltip;
