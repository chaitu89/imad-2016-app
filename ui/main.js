console.log('Loaded!');

// Move image

var img = document.getElementById("chaitu");
marginLeft = 0;
var moveRight = function(){
  marginLeft = marginLeft + 10;
  img.style.marginLeft = marginLeft + 'px';
};

img.onclick = function() {
  var interval = setInterval(moveRight,100);
};
