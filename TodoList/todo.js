window.setTimeout(function(){
	var todo=["empty"];

while(input!="quit"){

var input=prompt("What would you want to do?");

if(input==="list"){
	console.log(todo);
}
else if(input==="new")
{
	var value=prompt("What do you want to add?")
	todo.push(value);
}
}
alert("You finished your list.");
},500);