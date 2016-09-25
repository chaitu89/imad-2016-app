// Counter code
var button = document.getElementById("counter");

button.onclick = function() {

	// Creat a request object 
	var request = new XMLHttpRequest();
	
	//Capture the response and store it in a variable
	request.onreadystatechange = function() {
		if(request.readyState === XMLHttpRequest.DONE) {
			if(request.status === 200) {
			var counter = request.responseText;
			var span = document.getElementById("count");
			span.innerHTML = counter.toString();
		}	
		}
		//Not done yet
	};

	// Make a request to the counter
	request.open('GET','http://chaitu89.imad.hasura-app.io/counter',true);
	request.send(null);
};

// Populate a name list

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
  // Make a request to the server and send the name
  	// Creat a request object 
	var request = new XMLHttpRequest();
	
	//Capture the response and store it in a variable
	request.onreadystatechange = function() {
		if(request.readyState === XMLHttpRequest.DONE) {
			if(request.status === 200) {
		var names = request.responseText;
		names = JSON.parse(names);
  var list = '';
  for(var i=0;i<names.length;i++) {
      list += '<li>'+names[i]+'</li>';
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
		}	
		}
  //Capture a list of names and rent it on a list
	};
	// Make a request to the counter
	request.open('GET','http://chaitu89.imad.hasura-app.io/submit-name?name='+name,true);
	request.send(null);
};