import React, {  useEffect, useRef } from "react";
window.d3 = require('d3')
const functionPlot = require('function-plot')
const math = require("mathjs");
const ShowArea = props => {
  const fn = useRef(null);
  var temp =[]
  for(var i=0;i<10;i++){
    temp.push({
      fn: "x",
      range: [0, 0],
      closed: true
    })
  }
  functionPlot({
    target: fn.current,
    width: 725,
    height: 400,
    xAxis: {domain: [props.data.a-5,props.data.a+5]},
    data: temp
    })
  useEffect(() => {
    functionPlot({
      target: fn.current,
      width: 725,
      height: 400,
      xAxis: {domain: [props.data.a-5, props.data.b+5]},
      data: props.data.fn
    })
  })
  return (
  <div ref={fn}></div>
  );
};

export default ShowArea;
