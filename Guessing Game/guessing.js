let max = prompt("Enter the maximum number for the guessing game:");
let randomnumber=Math.floor(Math.random() * max) + 1;
console.log(randomnumber);
let guess = prompt("guess the number");
while(true){

if(guess=="quit"){
    console.log("user quit the game");
    break;
}
if(guess==randomnumber){
    console.log("Congratulations! You guessed the number correctly.",randomnumber);
    break;
}
else if(guess<randomnumber){
  guess= prompt("your guess is too low");
}
else{
    guess=prompt("your guess is too high");
}
}