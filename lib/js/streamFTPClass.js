class runVideo {

	constructor (width, height, defaultURL){
		
		this.pageTitle = $('#title');
		this.videoObj = $("#my_video");
		this.videoCtrl = $("#video_control");
		this.videoRunWithURL = $("#runUrl");
		this.width = width;
		this.height = height;
		this.videoURL = defaultURL;
		
		this.videoObj.css("width", this.width);
		this.videoObj.css("height", this.height);
		// this.videoObj.crossOrigin = 'anonymous';
	}

	initVideo(){
		console.log("started!");
		this.videoObj.attr("src", this.videoURL);
		this.videoObj.get(0).load();
		this.videoCtrl.on("click", (event) => this.controlVideo());
		this.videoRunWithURL.on("click", (event) => this.runUrl());
	}

	controlVideo(){
		let temp = event.target.textContent;
		
		if(temp == "Reload"){
			
			this.initVideo();
		}else if(temp == "Clear"){
			$('#inputUser').val("");
		}else if(temp == "Play"){
			
			this.videoObj.get(0).play();
		}else if(temp == "Info"){
			
			console.log(this.videoObj);
		}else if(temp == "Next"){
			
			// this.videoObj.play();
		}else if(temp == "Stop"){
		
			this.videoObj.get(0).pause();
		}else{
			
			console.log();
		}
	}

	runUrl(){
		let inputUser = $('#inputUser');
		
		if( inputUser.val() != ""){
			this.videoURL = inputUser.val();
		} 
		this.initVideo();
		this.videoObj.get(0).play();
	}
}

class runIframe {
	constructor (width, height,FTPURLs){
		this.iFrameObj = $("#myFrame");
		this.dropDownObj = $(".dropdown-menu");
		this.width = width;
		this.height = height;
		this.FTPURLs = FTPURLs;
		this.url = this.FTPURLs[1];

		this.iFrameObj.css("width", this.width);
		this.iFrameObj.css("height", this.height);
	}

	initFrame(){
		this.initDropDown();
		this.iFrameObj.attr("src", this.url);
		this.dropDownObj.on("click", (event) => this.chooseFTP());
	}

	initDropDown(){
		for(let k in this.FTPURLs) {
			let url = this.FTPURLs[k];
			let name = url.split("://")[1];
			$(".dropdown-menu").append("<a class=\"dropdown-item\" href=\"#\" value="+ url +">"+ name +"</a>");
		}
	}

	chooseFTP(){
		// let optionName = $(event.target).text();
		let tempURL = $(event.target).attr('value');
		this.iFrameObj.attr("src", tempURL);
	}
}