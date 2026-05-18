let screen = document.getElementById("screen");

function add(x){
  screen.value += x;
}

function equal(){
  screen.value = eval(screen.value);
}

function clr(){
  screen.value = "";
}