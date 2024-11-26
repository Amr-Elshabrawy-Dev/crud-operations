import { ResponsiveChoropleth } from "@nivo/geo";
import { mockGeographyData as data } from "../../data/mockData";
import { geoFeatures } from "../../data/mockGeoFeatures";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const dataFill = data.map((item) => {
  return {
    match: { id: item.id },
    id: item.value > 250000 ? null : "dots",
  };
});

const ChartGeographyCompo = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            background: colors.primary[400],
            color: colors.grey[100],
            fontSize: 12,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      colors="PuBuGn"
      unknownColor="#666666"
      fillColor="properties.color"
      label="properties.name"
      valueFormat=".2s"
      layers={["graticule", "features", "legends"]}
      role="application"
      ariaLabel="Choropleth map"
      match={"id"}
      value={"value"}
      projectionType={"mercator"}
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={!isDashboard ? [0.5, 0.5] : [0.49, 0.6]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={false}
      graticuleLineWidth={1}
      graticuleLineColor="#ffffff40"
      borderWidth={1.5}
      borderColor="#ffffff"
      isInteractive={true}
      onMouseEnter={() => {}}
      onMouseMove={() => {}}
      onMouseLeave={() => {}}
      onClick={(place, x) => {
        console.log("🚀 ~ place ~ :", place, x);
      }}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 2,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
        {
          id: "gradient",
          type: "linearGradient",
          colors: [
            {
              offset: 0,
              color: "#ffffff50",
            },
            {
              offset: 100,
              color: "inherit",
            },
          ],
        },
      ]}
      fill={dataFill}
    />
  );
};
export default ChartGeographyCompo;
