var state = ["Alabama","Alaska","American Samoa","Arizona","Arkansas",
"California","Colorado","Connecticut","Delaware","District of Columbia",
"Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa",
"Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
"Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska",
"Nevada","New Hampshire","New Jersey", "New Mexico","New York","North Carolina",
"North Dakota","Northern Marianas","Ohio","Oklahoma","Oregon",
"Pennsylvania","Puerto Rico","Rhode Island","South Carolina",
"South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Islands",
"Virginia","Washington","West Virginia","Wisconsin","Wyoming"];

var pl = [53,16,6,75,32,475,66,55,21,13,20,214,
102,7,25,23,156,83,44,33,55,51,25,95,91,130,77,36,71,
21,25,35,24,126,34,247,107,18,6,143,38,
61,189,60,24,53,20,67,222,33,16,7,95,101,29,86,14];

var up = [7,4,5,10,5,73,12,16,10,4,26,32,15,5,
10,4,26,9,8,4,5,8,5,23,25,17,16,5,13,6,5,8,8,
16,9,44,14,5,5,17,4,13,21,7,9,6,5,8,29,4,10,5,14,17,8,10,4];

var delegateData = [];

for (var i=0; i< state.length; i++){
    var info = [state[i], pl[i], up[i]];
    delegateData[i] = info;
}

var graph = d3.select("body").select(".chart")
              .data(delegateData)
              .enter()
              .append("div")
              .attr("class", "chart");
              
graph.append("p")
     .text(
         function(d){
            return d[0];
         }
      );
     
graph.append("div")
     .attr("class","bar")
     .style("width", function(d){
        return d[1]*5 + "px";
     })
     .style("background-color","green")
     .text(function(d){
         return d[1];
     });
     
graph.append("div")
     .attr("class","bar")
     .style("width", function(d){
        return d[2]*5 + "px";
     })
     .style("background-color","green")
     .text(function(d){
         return d[2];
     });
     
graph.append("div")
	.attr("class","bar")
	.style("width", function(d){
		return (d[2]+d[1])*5 + "px";
	})
	.style("background-color","blue")
	.text(function(d){
		return d[2]+d[1];
	});