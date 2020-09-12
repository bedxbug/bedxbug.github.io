let drive_urls = [
	"https://drive.google.com/file/d/1-QmR_JRY_x90kmiwSdG4puAwwm3VMgCO/preview"	,
	"https://drive.google.com/file/d/1-3L51n-peCSf7Eoo2gdT5eCts-GgWUpI/preview"	,
	"https://drive.google.com/file/d/10wE2_hI01qo6B6EX46GyZHglAABWNURF/preview"	,
	"https://drive.google.com/file/d/1cWeB6cRupZaD4ZpchoVGJ_zhHuuN857Z/preview"	
]

$("#title").text("G Tunnel");
$("#gdrive_frame").attr('src',drive_urls[0]);

function choose_movie_data(){
	
	let tag = "";

	for(var i=0;i<drive_urls.length;i++){
		tag += "<option value='"+i+"'>"+(i+1)+"</option>"
	}

	$("#choose_movie").html(tag);
}

// let overview = "<iframe id='g1' allow='fullscreen'></iframe>";
// $("#movie_overview").html(movie_overview);
// $("#movie_overview").attr('src',drive_urls[0]);
// console.log(movie_overview);


$("#play_movie").click(function(){

	let index = parseInt( $("#choose_movie").val() );
	console.log(index);

	$("#gdrive_frame").attr('src',drive_urls[index]);
});


choose_movie_data();
