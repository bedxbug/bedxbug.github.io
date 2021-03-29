// https://www.w3schools.com/tags/ref_av_dom.asp

videoURL = "http://fs.ebox.live/Movies/Animated/1988/Akira%20[1988]/Akira.1988__720p.BRrip__E-BOX.mp4";
// let videoURL = "http://172.16.50.10/SAM-FTP-3/Kolkata%20Bangla%20Movies/%282000%29/Utsab%20%282000%29/Utsab.avi";
ftpURL = [ 
	"http://fs.ebox.live/Movies/",

	"http://172.16.50.8/SAM-FTP",
	"http://172.16.50.9/SAM-FTP-1",
	"http://172.16.50.7/SAM-FTP-2",
	"http://172.16.50.10/SAM-FTP-3",

	"http://server1.ftpbd.net/FTP-1",
	"http://server2.ftpbd.net/FTP-2",
	"http://server3.ftpbd.net/FTP-3",
	"http://server4.ftpbd.net/FTP-4"
];

let minHeight = "450";

let p1 = new runVideo("600", minHeight, videoURL);
p1.initVideo();

let i1 = new runIframe("450", minHeight, ftpURL);
i1.initFrame();