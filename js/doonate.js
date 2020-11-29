var withy =  document.getElementById('with');
var Ads = document.getElementById("Ads");
var Start =  document.getElementById('Start');
var Xuanitem = document.getElementById("Xuanitem");
var XuanBox = document.getElementById("XuanBox");

Xuanitem.style.display = "none";
Start.style.display = "none";
withy.onclick = function (argument) {
	XuanBox.style.display = "none";
	Xuanitem.style.display = "none";
	Start.style.display = "block";
}
Ads.onclick = function (argument) {
	XuanBox.style.display = "none";
	Start.style.display = "none";
	Xuanitem.style.display = "block";
}