// Time to get computational, with JavaScript

window.onload = function() {
  var button = document.getElementById("previewButtton");
  button.onclick = previewHandler;
}

function previewHandler() {
  var canvas = document.getElementById("tshirtCanvas");
  var context = canvas.getContext("2d");
  fillBackgroundColor(canvas, context);
  
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
  
  // /// TRIANGLE DRAWING ///
  //  // This is how to write a triangle, filled with red
  // context.beginPath();
  // context.moveTo(100, 150);
  // context.lineTo(250, 75);
  // context.lineTo(125, 30);
  // context.closePath();
  // context.lineWidth = 5;
  // context.stroke();
  // context.fillStyle = "red";
  // context.fill();
  // /// END TRIANGLE CODE ///
  
  // /// CIRCLE DRAWING ///
  //  // This is how to write a portion of a circle, filled with red
  // context.beginPath();
  // context.arc(100, 100, 75, degreesToRadians(270), 0, false);
  // context.closePath()
  // context.fillStyle = 'red';
  // context.fill();
  // function degreesToRadians(degrees) {
  //   return (degrees * Math.PI)/180;
  // }
  // // END CIRCLE PRACTICE ///
  var colors = ["red", "blue", "green", "yellow"];
  
  context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
  context.fillRect(x, y, w, w);
}

function fillBackgroundColor(canvas, context) {
  var selectObj = document.getElementById('backgroundColor');
  var index = selectObj.selectedIndex;
  var bgColor = selectObj.options[index].value;
  context.fillStyle = bgColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
}
