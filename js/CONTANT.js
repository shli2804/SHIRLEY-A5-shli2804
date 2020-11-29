function checkForm2(){
	
	var email= $('#email').val();
	var text = $('#text').val();
	var work = $('#work').val();
	var time = $('#time').val();
	var liuya = $('#liuya').val();

	console.log($('#text').val())

	if(email.vlaue!=" " && text.vlaue!=" " && work.vlaue!=" " && time.vlaue!=" " && liuya.vlaue!=" "){
		alert("提交成功")
	}
}
