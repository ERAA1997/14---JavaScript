
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


// d3.json(url).then(function(data){  

//     console.log(data);

//     let samples = data.samples;
    
//     console.log(samples);
// });


function optionChanged(subjectID) {
    console.log(subjectID);
}

function startUp() {
    let dropDown = d3.select("#selDataset");

    d3.json(url).then(function(data){  

    
        let names = data.names;

        names.forEach(element => { 
            dropDown.append("option").attr("value", element).text(element);
        });
        let firstSubjectId = names[0];
        optionChanged(firstSubjectId);
    });
};



startUp();



// d3.selectAll("#selDataset").on("change",updatePlotly);

// function updatePlotly() {
//     let dropdownMenu = d3.select("#selDataset");

//     let dataset = dropdownMenu.property("value")
// }


//sort

d3.json(url).then(function(data) {

let trace1 = {
     x:data.samples_values,
     y:data.otu_ids,
     type: "bar",
     orientation: 'h',
};
let data1 = [trace1];

Plotly.newPlot("bar", data1);

});

// d3.json(url).then(function(data) {
// let trace2 = {
// x:
// y:
// type:

// }

// const xArray = [55, 49, 44, 24, 15];
// const yArray = ["Italy","France","Spain","USA","Argentina"];

// const data = [{
//   x: xArray,
//   y: yArray,
//   type: "bar",
//   orientation: "h",
//   marker: {color:"rgba(255,0,0,0.6)"}
// }];

// const layout = {title:"World Wide Wine Production"};

// Plotly.newPlot("bar", data, layout);


