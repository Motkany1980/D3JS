console.log("Start")
// D3 offers generators to create shapes
// basic
var dataArray=[{x:5,y:5},{x:10,y:15},{x:20,y:7},{x:30,y:18},{x:40,y:10}];
var dataArray2=[{x:5,y:25},{x:10,y:35},{x:20,y:27},{x:30,y:38},{x:40,y:30}];
var dataArray3=[{x:5,y:45},{x:10,y:55},{x:20,y:47},{x:30,y:58},{x:40,y:50}];

var svg=d3.select('body').append('svg')
    .attr('height','100%')
    .attr('width','100%');

// 1., Create line generator
var line=d3.line()
           .x(function(d,i){return d.x*6})
           .y(function(d,i){return d.y*4});
           
svg.append("path").attr("d",line(dataArray))
           .attr("fill","none")
           .attr("stroke","blue")      
//2., generator
           
           var lineCurved=d3.line()
           .x(function(d,i){return d.x*6})
           .y(function(d,i){return d.y*4})
           .curve(d3.curveStep);

svg.append("path").attr("d",lineCurved(dataArray2))
            .attr("fill","none")
            .attr("stroke","blue") 

// 3., generator
var lineCardinal=d3.line()
            .x(function(d,i){return d.x*6})
            .y(function(d,i){return d.y*4})
            .curve(d3.curveCardinal);

svg.append("path").attr("d",lineCardinal(dataArray3))
            .attr("fill","none")
            .attr("stroke","blue") 
