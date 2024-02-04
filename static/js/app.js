
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function optionChanged(subjectID) {
    console.log(subjectID);
    barchart(subjectID);
    metadata(subjectID);
}

function metadata(sample) {
    d3.json(url).then((data) => {
        let entireData = data.metadata;
        let barX = entireData.filter(sampleObj => sampleObj.id == sample);
        let emptyArray = barX[0];
        let PANEL = d3.select("#sample-metadata");

        PANEL.html("");
        for (key in emptyArray) {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${emptyArray[key]}`);
        };

        // buildGauge(emptyArray.wfreq);
    });
}

function barchart(sample) {
    d3.json(url).then((data) => {
        let entireData = data.samples;
        let barX = entireData.filter(sampleObj => sampleObj.id === sample);
        let emptyArray = barX[0];

        let layout = {
            title: 'Bubble',
            hovermode: 'closest',
            margin: { t: 0 },
            margin: { t: 30 }
        };

        let trace1 = {
            x: emptyArray.otu_ids,
            y: emptyArray.sample_values,
            text: emptyArray.otu_labels,
            mode: 'markers',
            marker: {
                size: emptyArray.sample_values,
                color: emptyArray.otu_ids,
                colorscale: 'earth'
            }
        };

        let data1 = [trace1];

        Plotly.newPlot('bubble', data1, layout);

        let yaxis = emptyArray.otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse()

        let trace2 = {
            x: emptyArray.sample_values.slice(0, 10).reverse(),
            y: yaxis,
            type: 'bar',
            orientation: 'h',
        };

        let data2 = [trace2];

        Plotly.newPlot('bar', data2);
    });
}

function init() {
    let selection = d3.select("#selDataset");

    d3.json(url).then((data) => {
        let names = data.names;

        names.forEach(element => {
            selection.append("option").attr("value", element).text(element);
        });

        let firstSubjectId = names[0];
        barchart(firstSubjectId);
        metadata(firstSubjectId);
    });
}

init();

