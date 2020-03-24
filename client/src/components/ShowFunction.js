import React, {  useEffect, useRef } from "react";
window.d3 = require('d3')
const functionPlot = require('function-plot')
const math = require("mathjs");
const ShowFunction = props => {
  const fn = useRef(null);
  var t = props.data.fn
  useEffect(() => {
    functionPlot({
      target: fn.current,
      width: 725,
      height: 400,
      data: [{
        fn: props.data.fn.replace("e",math.e),
        color: "green",
        graphType: 'polyline'
      }, 
      // {
      //   fn: `x-${props.data.answer.x}`,
      //   color: "red",
      //   skipTip: true
      // }, 
      {
        points: [
          [props.data.answer.x, props.data.answer.y]
        ],
        fnType: 'points',
        graphType: 'scatter',
        color: "blue",
        attr: { r: "3" },
      }],
      // annotations: [{
      //   x: props.data.answer.x,
      //   text: `x = ${props.data.answer.x.toFixed(6)}`
      // }, {
      //   y: props.data.answer.y,
      //   text: `y = ${props.data.answer.y.toFixed(6)}`
      // }]
    })
  })
  return (
  <div ref={fn}></div>
  );
};

export default ShowFunction;
