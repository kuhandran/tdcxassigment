import React from "react";
import { Pie } from "react-chartjs-2";

// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/


const data = {
  labels: ["Completed","Pending"],
  datasets: [
    {
      data: [5,20],
      backgroundColor: [
        "rgb(232,236,236)",
        "rgb(82,133,236)",
      ]
    }
  ],
 
  plugins: {
    labels: {
      render: "percentage",
      fontColor: ["green", "white", "red"],
      precision: 2
    },
  },
   text: "23%",
};

export class PieChart extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={data}
          options={{
            
            elements: {
              
              center: {
                legend: { display: true, position: "right" },
                text: "Red is 2/3 the total numbers",
                color: "#FF6384", // Default is #000000
                fontStyle: "Arial", // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25 // Default is 25 (in px), used for when text wraps
              }
            },
            
          }}
        />
      </div>
    );
  }
}

