//array 
const myProfile=["karim",20,"Dhaka"]
console.log(myProfile)
myProfile.push("music","Bangla")
console.log(myProfile)
myProfile.pop()
console.log(myProfile)
myProfile.splice(2)
console.log(myProfile)
myProfile[2]="Rangpur";
console.log(myProfile)
//for function
for(i=0;i<10;i++){
    console.log(i)
}
//for while function
let a=0;
while(a<10){
console.log(a);
a++
}
//for do-while function
let x=0;
do{
    console.log(x);
    x++;
}
while(x<10)
//continue(delete number)
for(i=1;i<=10;i++){
    if(i===7){
        continue;
    }
    console.log(i);
}
//break(stop counting number)
for(i=1;i<=10;i++){
    if(i===5){
        break;
    }
    console.log(i)
}
//reverse loop
for(i=10;i>=0;i--){
console.log(i)
}
//reverse decreasing by 2

for(i=10;i>=0;i-=2){
    console.log(i)
    }
//Practice counting & using ternary operator
let count=0
for(i=0;i<5;i++){
    const realCount=count+1
    console.log(`I Love JS ${realCount} ${realCount>1 ?"times":"time"}`)
    count++
}
// for in loop( mostly for in use for object)
const myDocument={
    Name: "Kalam",
    Age:30,
    City:"Dhaka",
    Language: "Bangla"
}
for(let property in myDocument){
    console.log(property)
    console.log(myDocument["Name"])
}
//for of loop (mostly for of use for array)
const myLife=["Salam",25,"Rangpur","English"]
for(let story of myLife){
    console.log(myLife)
    console.log(story)
}
//function in function
for(i=0;i<5;i++){
    for(j=0;j<2;j++){
        console.log(j)
    }
    console.log(i)
}
//I have learn more



