import React from "react";
import { Pie } from "react-chartjs-2";

let data = {
  labels: ["Completed", "Pending"],
  datasets: [
    {
      data: [0, 0],
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


/*
  Date: 24/07/2021
  Developer : Kuhandran
  Purpose:
  - data initated with graph
  - {getData} update the data
  */




export class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: []
    };
  }

  getData = () => {
    let values = [];
    values.push(this.props.totalPending);
    values.push(this.props.totalCompleted);
    data.datasets[0].data = values;
    return data;
  }

  render() {

    let newData = this.getData();

    return (
      <div>
        <Pie
          data={newData}
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

