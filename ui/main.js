console.log('Loaded!');

// Move image

var img = document.getElementById("chaitu");
var marginLeft = 0;
var moveRight = function(){
  marginLeft = marginLeft + 5;
  img.style.marginLeft = marginLeft + 'px';
};

img.onclick = function() {
  var interval = setInterval(moveRight,50);
};
