


function Get(yourUrl){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var yourUrl = "https://nsu-offered-course-list.now.sh";
var json_obj = JSON.parse(Get(yourUrl));
var json_length = json_obj.courses.length;
var rawKeys = Object.keys(json_obj.courses[0]);
var keys = rawKeys.splice(1,)
console.log(keys);


var data = document.getElementById("dataList");
var button = document.getElementById('button1');
var row_length = data.rows.length - 1;
var cell_length = data.rows[0].cells.length ;
//button.addEventListener("click",run_data);

// console.log(json_length);

for(var j = 0; j < json_length ; j++)
{	
	var row = data.insertRow(j+1);
	for(var i=0; i<keys.length; i++){
		var key = keys[i];
		var temp = row.insertCell(i);
		temp.innerHTML = json_obj.courses[j][key];
	}
}


// function run_data()
// {
// 	for(var j = 1; j < json_length ; j++)
// 	{	
// 		var row = data.insertRow(j);
// 		for(var i=0; i<keys.length; i++){
// 			var key = keys[i];
// 			var temp = row.insertCell(i);
// 			temp.innerHTML = json_obj.courses[j][key];
// 		}
// 	}
// }

















