var people = [
["alex", 22, "united states", ["blue", "brown"] ],
["alex", 22, "united states", ["blue", "brown"] ],
["alex", 22, "united states", ["blue", "brown"] ],
["alex", 22, "united states", ["blue", "brown"] ],
["alex", 22, "united states", ["blue", "brown"] ],
];

for (var i = 0; i < people.length; i++) {
	document.write("<h2>Person " + (i + 1) +"</h2>");
	for (var details in people [i]) {
		document.write(people[i][details]+"<br>");
	}
}

$(document).ready(function() {
	var name = document.getElementById("name").value;

	function addInput() {
		people.push(['name']);
	}
	$("#addAll").mousedown(function(){
		addInput();
	})

	// for(var i=0 in people) {
	// 	console.log(people[i]);
	// }


});
//detauks

//currently new arrays are being created but not displayed