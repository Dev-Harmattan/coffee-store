// var canvas = document.getElementById("stockGraph");
// var context = null;



// //for testing for fallback
// if(canvas.getContext){
//     context = canvas.getContext("2d");

    //By default canvas only support the rectangle and path other drawing are made by the combination of this.

    //to draw rectangle with fill color
    // context.fillStyle = "rgb(200, 0, 0)";
    // context.fillRect(10, 10, 50, 50);

    // context.fillStyle = "rgb(0, 0, 200, 0.5)";
    // context.fillRect(30, 30, 50, 50);

    // context.strokeRect(10, 10, 100, 100);
    // Draws a rectangular outline.

    // context.clearRect(10, 10, 100, 100);
    //Clears the specified rectangular area, making it fully transparent.

    // context.fillRect(25, 25, 100, 100);
    // context.clearRect(45, 45,  60, 60);
    // context.strokeRect(50, 50, 50, 50);

    //drawing path
    // context.beginPath();
    // context.moveTo(50, 30);
    // context.lineTo(25, 45);
    // context.lineTo(50, 65);
    // context.fill();

    //draw smiley
    // context.beginPath();
    // context.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    // context.moveTo(110, 75);
    // context.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    // context.moveTo(65, 65);
    // context.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    // context.moveTo(95, 65);
    // context.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    // context.stroke();


    // context.beginPath();
    // context.moveTo(25, 25);
    // context.lineTo(105, 25);
    // context.lineTo(25, 105);
    // context.fill();

    // context.beginPath();
    // context.moveTo(125, 125);
    // context.lineTo(125, 45);
    // context.lineTo(45, 125);
    // context.closePath();
    // context.stroke();

    // context.beginPath();
    // context.moveTo(70, 70);
    // context.arc(70, 70, 40, 0, ((Math.PI/180) * 360), false);
    // context.fill();

    // Quadratric curves example
    // context.beginPath();
    // context.moveTo(75, 25);
    // context.quadraticCurveTo(25, 25, 25, 62.5);
    // context.quadraticCurveTo(25, 100, 50, 100);
    // context.quadraticCurveTo(50, 120, 30, 125);
    // context.quadraticCurveTo(60, 120, 65, 100);
    // context.quadraticCurveTo(125, 100, 125, 62.5);
    // context.quadraticCurveTo(125, 25, 75, 25);
    // context.stroke();

    // for (var i = 0; i < 6; i++) {
    //     for (var j = 0; j < 6; j++) {
    //         context.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', '  +   Math.floor(255 - 42.5 * j) + ', 0)';
    //         context.fillRect(j * 25, i * 25, 25, 25);
    //     }

    // }
    // context.beginPath();
    // context.fillStyle = '#FD0';
    // context.fillRect(0, 0, 75, 75);
    // context.fillStyle = '#6C0';
    // context.fillRect(75, 0, 75, 75);
    // context.fillStyle = '#09F';
    // context.fillRect(0, 75, 75, 75);
    // context.fillStyle = '#F30';
    // context.fillRect(75, 75, 75, 75);
    // context.fillStyle = '#FFF';
    // context.fill();

//     context.globalAlpha = 0.2;

//   Draw semi transparent circles
//   for (var i = 0; i < 7; i++) {
//     context.beginPath();
//     context.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
//     context.fill();
//   }


//Hw to draw text

    // context.beginPath();
    // context.font = "50px serif";
    // context.fillText("H", 50, 50);

    
    // context.beginPath();
    // context.font = "50px sans-serif";
    // context.textAlign = "center";
    // context.textBaseline = "top";

    // context.strokeText("H", 50, 50);


    // context.beginPath();
    // context.arc(50, 50, 40, 0, Math.PI * 2, true );
    // context.clip()
    // context.rect(20, 20, 100, 100);
    // context.clip();
    
    // var img = new Image();
    // img.onload = function() {
    //     context.drawImage(img, 0, 0)
    //     context.lineWidth = "15";
    //     context.strokeStyle = "#cccccc"
    //     context.strokeRect(20, 20, 100, 100);
    //     // context.stroke();
    // }
    // img.src = "img/picture2.jpg"

    
// }


//drag and drop memo
// var dragStart = function(e) {
//     // Add the target element's id to the data transfer object
//     try {
//         e.dataTransfer.setData("text/plain", e.target.id)
//     }catch(ex) {
//         e.dataTransfer.setData("Text", e.target.id);
//     }
// }

// var  cancel = function(e) {
//     //prevent dafault behaviour
//     if(e.prevenDefault){
//         e.prevenDefault();
//     }
//     if(e.stopPropagation) {
//         e.stopPropagation();
//     }
//     return false;
// }

// var dropped = function(e) {
//     var id;
    
//     cancel(e);

//     try {
//       id = e.dataTransfer.getData("text/plain");
//     } catch(err)  {
//       id = e.dataTransfer.getData("Text");
//     }

//     e.target.appendChild(document.querySelector("#" + id));
// }

// window.addEventListener("DOMContentLoaded", () => {
//     var img = document.querySelector("#source-image");
//     img.addEventListener("dragstart", dragStart);
// });

// var target = document.querySelector("#target-container");
// target.addEventListener("drop", dropped);
// target.addEventListener("dragenter", cancel);
// target.addEventListener("dragover", cancel);

