
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

function metadata(sample) {

d3.json(url).then((data) =>{

let entireData = data.samples;

let barX = entireData.filter(sampleObj => sampleObj.id === sample);

let emptyArray = barX[0];

let PANEL = d3.select("#sample-metadata")

PANEL.html("hr")

for (key in emptyArray) {
    PANEL.append("h6").text("${key.toUppercase()}: ${result[key]}")
}
buildGauge(result.wfreq);
});
};

function barchart(sample) {

d3.json(url).then((data) =>{

let entireData = data.samples;

let barX = entireData.filter(sampleObj => sampleObj.id === sample);

let emptyArray = barX[0];

let otu_ids1 = emptyArray.otu_ids1;
console.log(barX);

let otu_labels1 = emptyArray.otu_labels1;

let sample_values1 = emptyArray.sample_values1;


let layout = {
    title:'Bubble',
    hovermode:'closest',
    margin: {t: 0},
    xaxis: {title: 'test'},
    margin:{t:30}
};

let trace1 = {
    x:otu_ids1,
    y:sample_values1,
    text:otu_labels1,
    mode:"markers",
    marker:{
        size: sample_values1,
        colour: otu_ids1,
        colourscale:"earth"
        }
  
};

let data1 = [trace1];

Plotly.newPlot("bubble", data1, layout);

// });

// let trace2 = {
//      x:otu_ids1,
//      y:sample_values1,
//      type: "bar",
//      orientation: 'h',
// };
// let data2 = [trace2];

// Plotly.newPlot("bar", data2);

});

};

// for sorting const top10Data = sortedData.slice(0, 10);

// const sortedData = otuData.sort((a, b) => b.value - a.value);

// const otuNames = top10Data.map(entry => entry.otu);

// const filteredData = data.filter(item => item.id === desiredId);


