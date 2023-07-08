function sendEmail(sender,dest,sujet,corps,pass) {
  	Email.send({
    Host: "smtp.elasticemail.com",
    Username: "karljdemfond@gmail.com",
    Password: pass,
    To: dest,
    From: sender,
    Subject: sujet,
    Body: corps
  }).then(
    message => alert(message)
  );
}
function codegenerer(){
	const caraters='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
	let code='';
	for (var i = 0; i < 4; i++) {
		const randomIndex=Math.floor(Math.random()* caraters.length);
		code+=caraters.charAt(randomIndex);
	}
	const timestamp=Date.now();
	code+='DEM'+timestamp;
	return code;
}

