/*
let selected = document.getElementById('hide');
let hidden = document.getElementById('toHide');

let open = function() {
    hidden.style.display = 'block';
}

let close = function() {
    hidden.style.display = 'none';
}

selected.onclick = open;
hidden.onclick = close;
*/


let selected = document.getElementById('hide');
let hidden = document.getElementById('hidden');


let open = function(){
    hidden.style.display = 'block';
}

let close = function(){
    hidden.style.display = 'none';
}


selected.onclick = open;
hidden.onclick = close;

console.log('hello');
