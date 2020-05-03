alert("You are connected !");
var num=10;
var guessed_num=Number(prompt("Guess the number: ")); // since prompt returns string , we convert it to number;

if(num===guessed_num)
	alert("You guessed right, CONGRATULATIONS!");
else if(num<guessed_num)
	alert("You need to go down!");
else
	alert("Guess Higher!");
