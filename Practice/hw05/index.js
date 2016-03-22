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
var pl = [50,28,0,58,40,172,37,28,16,19,99,76,0,19,32,69,57,30,40,46,46,
23,38,42,59,38,40,52,27,36,30,23,51,24,95,72,0,9,66,43,28,17,23,19,50,29,
58,155,40,16,6,49,44,34,42,26];
var up = [0,0,9,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,28,0,0,0,0,54,0,0,0,0,0,0,0,0,3,0,0,0,0,3];
var state2 = ["Alabama","Alaska","American Samoa","Arizona","Arkansas",
"California","Colorado","Connecticut","Delaware","District of Columbia",
"Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa",
"Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
"Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska",
"Nevada","New Hampshire","New Jersey", "New Mexico","New York","North Carolina",
"North Dakota","Northern Marianas","Ohio","Oklahoma","Oregon",
"Pennsylvania","Puerto Rico","Rhode Island","South Carolina",
"South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Islands",
"Virginia","Washington","West Virginia","Wisconsin","Wyoming"];

var pl2 = [53,16,6,75,32,475,66,55,21,20,214,
102,7,25,23,156,83,44,33,55,51,25,95,91,130,77,36,71,
21,25,35,24,126,34,247,107,18,6,143,38,
61,189,60,24,53,20,67,222,33,16,7,95,101,29,86,14];

var up2 = [7,4,5,10,5,73,12,16,10,26,32,15,5,
10,4,26,9,8,4,5,8,5,23,25,17,16,5,13,6,5,8,8,
16,9,44,14,5,5,17,4,13,21,7,9,6,5,8,29,4,10,5,14,17,8,10,4];
var dataset = [];

for (var i = 0; i < state.length; i++){
	var info = [state[i],pl[i],up[i]];
	dataset.push(info);
}

var x = d3.scale.linear()
	.domain([0, d3.max(pl.concat(up))])
	.range([0, 1000]);

var hold = d3.select(".chart")
	.data(dataset);

hold.enter()
	.append("div")
	.attr("class","chart");

hold.append("div")
	.attr("class","state")
	.text(function(d){
		return d[0];
	});

hold.append("div")
	.attr("class","bara")
	.style("width", function(d){
		return x(d[1]) + "px";
	})
	.text(function(d){
		return d[1];
	});

hold.append("div")
	.attr("class","baru")
	.style("width", function(d){
		return x(d[2]) + "px";
	})
	.text(function(d){
		return d[2];
	});

hold.append("div")
	.attr("class","total")
	.text(function(d){
		return "Total Delegates: " + (d[1]+d[2]);
	})

var isRep = true;
var Switch = function(){
	dataset = [];
	var y = d3.scale.linear()
	var c;
	var p;
	var img;
	if(!isRep){
		for (var i = 0; i < state.length; i++){
			var info = [state[i],pl[i],up[i]];
			dataset.push(info);
		}
		isRep = true;
		y.domain([0,d3.max(pl.concat(up))]);
		c = "red";
		p = "Republican";
		img = "rep.gif";
	}
	else{
		for (var i = 0; i < state2.length; i++){
			var info = [state2[i],pl2[i],up2[i]];
			dataset.push(info);
		}
		isRep = false;
		y.domain([0,d3.max(pl2.concat(up2))]);
		c = "blue";
		p = "Democratic";
		img = "dem.gif";
	}
		y.range([0,1000]);

	d3.selectAll(".bara")
		.data(dataset)
		.transition()
		.style("width",function(d){
			return y(d[1])+"px";
		})
		.transition()
		.style("background-color", c)
		.transition()
		.text(function(d){
			return d[1];
		});
	
	d3.selectAll(".baru")
		.data(dataset)
		.transition()
		.style("width",function(d){
			return y(d[2])+"px";
		})
		.transition()
		.text(function(d){
			return d[2];
		});

	d3.selectAll(".state")
		.data(dataset)
		.text(function(d){
			return d[0];
		});

	d3.selectAll(".total")
		.data(dataset)
		.transition()
		.text(function(d){
			return "Total Delegates: "+ (d[1] + d[2]);
		});

	d3.selectAll("h1")
		.transition()
		.text(p + " Party Delegates");

	d3.selectAll("h2")
		.transition()
		.text(p);

	d3.selectAll("img")
		.transition()
		.attr("src",img);

};
var button = document.getElementById("switch");
button.addEventListener("click",Switch);