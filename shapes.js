var dataArray=[5,11,18];

var svg=d3.select("body").append("svg")
.attr("width","100%")
.attr("height","100%")
.style("background","grey");

svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
    .attr("height",function(d){return d*15})
    .attr("width","50")
    .attr("x",function(d,i){return 60*i})
    .attr("y",function(d,i){return 300-(d*15)});

    svg.selectAll("circle")
        .data(dataArray)
        .enter().append("circle")
        .attr("cx",function(d,i){return 300+(i*20)})
        .attr("cy","150")
        .attr("r","8");


