console.log("Start")
// D3 offers generators to create shapes
// basic
var dataArray=[{x:5,y:5},{x:10,y:15},{x:20,y:7},{x:30,y:18},{x:40,y:10}];

var svg=d3.select('body').append('svg')
    .attr('height','100%')
    .attr('width','100%');

// Create line generator
var line=d3.line()
           .x(function(d,i){return d.x*6})
           .y(function(d,i){return d.y*4});
// Create line generator

svg.append("path").attr("d",line(dataArray))
                  .attr("fill","none")
                  .attr("stroke","blue")        
