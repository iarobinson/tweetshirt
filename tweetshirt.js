// Time to get computational, with JavaScript

window.onload = function() {
  var button = document.getElementById("previewButtton");
  button.onclick = previewHandler;
}

function previewHandler() {
  console.log("Preview Handler Called");
  var canvas = document.getElementById("tshirtCanvas");
  var context = canvas.getContext("2d");
  
  var selectObj = document.getElementById("shape");
  var index = selectObj.selectedIndex;
  var shape = selectObj[index].value;
  
  if (shape == "squares") {
    for (var squares = 0; squares < 20; squares += 1) {
      // Passing the canvas and the context to drawSquares to execute drawing function
      drawSquare(canvas, context);
    }
  }
}

function drawSquare(canvas, context) {
  // We choose 40 px so the squares don't get too long
  var w = Math.floor(Math.random() * 40);
  // We multiply random numbers by height and width to get appropriate sized squares
  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);
  
  context.fillStyle = 'lightblue';
  context.fillRect(x, y, w, w);
}
