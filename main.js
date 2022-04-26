let div = document.getElementById("resultado");

let num = 0;

function somar() {
  num++;
  div.innerHTML = num;
}

function diminuir() {
  num--;
  div.innerHTML = num;
}

let body = document.getElementsByTagName("body")[0];
let btn = document.getElementsByTagName("button")[0];

let btn1 = document.getElementsByTagName("button")[1];

let btn2 = document.getElementsByTagName("button")[2];

function alteraTema() {
  body.classList.toggle("dark-body");
  btn.classList.toggle("btn-dark");
  btn1.classList.toggle("btn-dark");
  btn2.classList.toggle("btn-dark");
}
