 document.getElementById('test').innerHTML = "Welcome my friend to my page";

let output = document.getElementById("calc")

function display(num) {
    output.value += num;
}

function Clear() {
    output.value = "";
}

function Delete() {
    output.value = output.value.slice(0, -1);
}
function calc() {
    try {
        output.value = eval(output.value);
    }
    catch(err) {
        output.value = Error;
    }
}

 function showPrompt() {
     let name = prompt("what is your name?");
  
     alert("wellcome to calculator " + name)
     document.write("<p> Sorry ... </p>" +  name   + "<br>" + "<h1> Go Back </h1>  <button>Click here to go back</button>");
 
     const button = document.querySelector("button");
     button.addEventListener("click", function() {
        window.location.href = "/";
     });
    } 
   
    function refrech(){
        window.location.reload();
    };


let canvas = document.getElementById("my_canvas");
let context = canvas.getContext("2d");

const speed = 4;
let position = 0;
let moveSpeed = speed;
let radius = 40;

function moveBall(){
    if (position + radius > 640) {
        moveSpeed = -speed;
    } else if (position -radius < 0) {
        moveSpeed = speed;
    }
    position += moveSpeed;
}

function drawBall() {
    context.clearRect(0, 0, 640, 480);
    context.fillStyle = "#faf4f4";
    context.beginPath();
    context.arc(position, 50, radius, 0, 2 * Math.PI);
    context.fill();
}
function animate(){
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);

