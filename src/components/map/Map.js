import React, { memo } from "react";
import geoUrl from "./world-countries.json";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
const colorScale = scaleLinear().domain([0, 0.7]).range(["#caf0f8", "#03045e"]);

function Map({ setTooltipContent, info }) {
  return (
    <div data-tip="">
      <ComposableMap
        projection="geoAlbers"
        projectionConfig={{
          rotate: [-10, 0, 0],
          center: [0, 3],
          scale: 147,
        }}
      >
        <ZoomableGroup center={[0, 0]}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = info.country.find((s) => s.country_id === geo.id);
                let x = d ? d.probability : 0;
                geo.p = x;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setTooltipContent(
                        `${geo.properties.name} %${geo.p * 100}`
                      );
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    fill={d ? colorScale(d.probability) : "#F5F4F6"}
                    stroke="#FFF"
                    strokeWidth={1}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}

export default memo(Map);
