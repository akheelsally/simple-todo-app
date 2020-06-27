import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import Tooltip from "@material-ui/core/Tooltip";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const useStyles = makeStyles({
  root: {
    color: "#3880ff",
    width: 300,
    height: 2,
    padding: "15px 0",
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    "&:focus, &:hover, &$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000",
    },
  },
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor",
  },
});

const marks = [
  {
    value: 5000,
    label: "5K",
  },
  {
    value: 10000,
    label: "10K",
  },
  {
    value: 15000,
    label: "15K",
  },
  {
    value: 20000,
    label: "20K",
  },
  {
    value: 25000,
    label: "25K",
  },
  {
    value: 30000,
    label: "30K",
  },
];

function valuetext(value) {
  return `RF${value}`;
}

export default function DiscreteSlider(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Buget Range
      </Typography>
      <Slider
        defaultValue={30000}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="off"
        step={5000}
        marks={marks}
        min={5000}
        max={30000}
        onChangeCommitted={props.onChangeCommitted}
      />
    </div>
  );
}
