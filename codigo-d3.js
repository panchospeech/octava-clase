var w = 980, h = 350, f = 0.5, p=1;
         
         d3.json("http://api.nobelprize.org/v1/prize.json").then(function(data) {
            var category = d3.values(data.prize);
            console.log(category);
         var svg = d3.select("#here")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  .style("background","#EEEEEE");
         svg.selectAll("rect")
            .data(category)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                  return i * (w / category.length);
            })
            .attr("y", function(d) {
                  return h - (d.valor * f);
            })
            .attr("width", w / category.length - p)
            .attr("height", function(d) {
                  return d.valor * f;
            })
            .attr("fill", function(d) {
               return "rgb(0, 0, " + (d.valor * f) + ")";
            });
         svg.selectAll("text")
            .data(category)
            .enter()
            .append("text")
            .text(function(d) {
                  return Math.round(d.valor);
            })
            .attr("text-anchor", "middle")
            .attr("x", function(d, i) {
                  return i * (w / category.length) + (w / category.length - p) / 2;
            })
            .attr("y", function(d) {
                  return h - (d.valor * f)+20;
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "white");
