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
 
     const button = document.getElementById("button");
     button.addEventListener("click", function() {
        window.location.href = "/";
     });
    } 
   
    function refrech(){
        window.location.reload();
    };
