alert("PROGRAMA PARA SUMAR");

function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}
function adder (optag, restag) {
	var operation = document.getElementById(optag);
	var operands = operation.innerHTML.split ("+");
	var result = parseInt(operands[0]) + parseInt(operands[1]);
	changer (restag, '=' + result);
}
function sumRandom(optag) {
	var operation = document.getElementById(optag);
	var sum1 = Math.round(Math.random()*1000);
	var sum2 = Math.round(Math.random()*1000);
	var total = parseInt(sum1)+parseInt(sum2);
	operation.innerHTML = sum1 + "+" + sum2+ "=" + total;
}
function sum(optag) {
	var operation = document.getElementById(optag);
	var sum1 = prompt('What is your first number?');
	var sum2 = prompt('What is your second number?');
	var total = parseInt(sum1)+parseInt(sum2);
	operation.innerHTML = sum1 + "+" + sum2+ "=" + total;
}
