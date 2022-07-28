const age = parseInt(prompt("How Old Are You")  );

if(isNaN(age)){
    console.log("please write a number");
} else if (age <18){
    console.log("you are too young");
} else {
    console.log("you can drink");
} 