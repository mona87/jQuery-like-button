$(document).ready(start);

function start(){

var $btn = $('#btn');
var count = 0;

$btn.on('click', addLike);

function addLike(){

	count++;

	if(count === 1){
	
		$btn.html(count + ' like');

	}else{
		$btn.html(count + ' likes');
	}




}



























}