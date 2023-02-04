function ac(){
    document.getElementById("ans").value=""
}

function show(input){
    document.getElementById("ans").value+=input;
}

function calc(){
   let output=eval (document.getElementById("ans").value);
    document.getElementById("ans").value=output;
}