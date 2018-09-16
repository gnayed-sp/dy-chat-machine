window.onload = () => {
	resizeTFMessage(); // Change the size of Message Box footer to fit the width of window
	
	document.querySelector("#btn_send_message").addEventListener("click", sendMessage);
	document.querySelector("#tf_message").addEventListener("keydown", (event) => {
		if(event.keyCode == 13){
			sendMessage();
		}
	});
}

window.onresize = () => {
	resizeTFMessage();
}

function resizeTFMessage(){
	document.querySelector("#tf_message").style.width = document.body.clientWidth - 70;
}

function addMessage(username,message,user){
	if (user){
		document.querySelector("#div_messages").innerHTML += "<div><div class='message_box user'><username>"+username+"</username>"+message+"</div></div>";
	} else {
		document.querySelector("#div_messages").innerHTML += "<div><div class='message_box other'><username>"+username+"</username>"+message+"</div></div>";
	}
}

function sendMessage(){
	var userMessage = document.querySelector("#tf_message").value;
	document.querySelector("#tf_message").value = "";
	
	//addMessage("gnayed", userMessage, false);
	
	fetch(
		'http://inec.sg/chat/insertMessage.php', 
		{
			mode: 'cors',
			method: 'POST',
			//body: "{'tf_username':'student','tf_password':'12345','tf_message':'"+userMessage+"'}"
			body: "tf_username=student&tf_password=12345&tf_message=" + userMessage
			,
			//),
			headers: {
				//'Content-Type': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				'Accept': '*/*',
			}
		}
	)
	.then((response) => {
		if (response.ok){
			return response.json();
		} else {
			throw Error(response.statusText);
		}
	})
	.then((data) => {

			console.log( data );
			resizeTFMessage();

	})
	.catch((error) => {
		console.log(error);
	})
	;
	
}