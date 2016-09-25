// Counter code
var button = document.getElementById("counter");

button.onclick = function() {

	// Creat a request object 
	var request = new XMLHttpRequest();
	
	//Capture the response and store it in a variable
	request.onreadystatechange = function() {
		if(request.readyState === XMLHttpRequest.DONE){
			if(request.status === 200) {
			var counter = request.responseText;
			var span = document.getElementById("count");
			span.innerHTML = counter.toString();
		}	
		}
		//Not done yet
	};

	// Make a request to the counter
	request.open('GET','http://10.22.3.210:8080/counter',true);
	request.send(null);
};
