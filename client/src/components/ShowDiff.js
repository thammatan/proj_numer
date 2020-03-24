import React, {  useEffect, useRef } from "react";
window.d3 = require('d3')
const functionPlot = require('function-plot')
const math = require("mathjs");
const ShowFunction = props => {
  const fn = useRef(null);
  var t = props.data.fn
  useEffect(() => {
    console.log(`${props.data.calAns}x + (${props.data.realAns-props.data.calAns*props.data.x})`);
    functionPlot({
      target: fn.current,
      width: 725,
      height: 400,
      data: [{
        fn: props.data.fn.replace("e",math.e),
        graphType: 'polyline',
        derivative: {
          fn: props.data.fn2.replace("e",math.e),
          x0: props.data.x,
        }
      },{
        fn: `${props.data.calAns}x + (${math.parse(props.data.fn.replace("e",math.e)).evaluate({x:props.data.x})-props.data.calAns*props.data.x})`,
        color: "red",
        skipTip:true 
      }]
    })
  })
  return (
  <div ref={fn}></div>
  );
};

export default ShowFunction;
