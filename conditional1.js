const age = parseInt(prompt("how old are you"))

if (isNaN(age) || age <0 ){
    console.log("please write a age" )
}
else if (age < 18){
    console.log("보호자의 동의가 필요합니다.")
}
else if (age>= 18 && age<=50){
    console.log("you can drink")
}
else if (age>50){
    console.log("you are too old to drink ")
}