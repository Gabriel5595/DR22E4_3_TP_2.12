const mod = document.querySelector('#modal');
const fecha = document.querySelector('#close');
const btn = document.querySelector('#open');

mod.classList.add('modal');
fecha.src='close[1].png';

function abrir(){
  mod.classList.toggle('abrir');
}

function fechar(){
  mod.classList.toggle('fechar');
}


