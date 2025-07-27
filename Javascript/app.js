//let color='green';
//if (color === 'red') {
  //  console.log('Stop');
//}
//if (color === 'yellow') {
  //  console.log('Slow down');
//}
// if (color === 'green') {
//     console.log('Go');
// }
// let num=10;

// if(num%10==0){
//   console.log("Number is divisible by 10");
// }

// else{
//   console.log("Number is not divisible by 10");
// }
// let name= prompt("Enter your name");
// let age = prompt("Enter your age");
// alert(`Hello ${name}, you are ${age} years old.`);
// let game = [['X', null, '0'],
//             [null, 'X', null],['0', null, 'X']];
            
// let  number=287152;
// let count=0;
// let copy=number;
// for(let i=0; i<=copy.lenght; i++){
// count++;
// console.log(count);

// }
let todo=[];
let req= prompt("Enter the task you want to perform: (list, add, delete, exit)");
console.log(req);
while(true)
{
    if(req == "exit"){
        console.log("quitting app");
        break;
    }
    else if(req == "list"){
        console.log("----------------------------------------------------------");
        for(let i=1; i<=todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("----------------------------------------------------------");
    }
    else if(req == "add"){
        let task = prompt("Enter the task you want to add");
        todo.push(task);
        console.log(`Task "${task}" added successfully.`);
    }
    else if(req == "delete"){
        let idx = prompt("Enter the index of the task you want to delete");
        todo.splice(idx, 1);
        console.log(`Task at index ${idx} deleted successfully.`);
    }
    else{
        console.log("Invalid input, please try again.");
    }
    req = prompt("Enter the task you want to perform: (list, add, delete, exit)");
}
