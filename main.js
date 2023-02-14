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
//object
const myProfile1={
    Name: "Rahim",
    Age:"30",
    city:"Dhaka",
    Language: ["Bangla","English","Hindi"],
    Sports:"Football"
}
console.log(myProfile1.Language[1])
myProfile1.Language[2]="Japanese"
console.log(myProfile1.Language)
delete myProfile1.Sports;
console.log(myProfile1)
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
// padstar & padEnd
const text="Hello World";
console.log(text.length)
console.log(text.padStart(15,'*'))
console.log(text.length)
console.log(text.padEnd(15,'*'))
console.log(text.length)
//search & relpace
const text1="Bangladesh is beauty. The rever is also beauty."
console.log(text1.search('n'))
console.log(text1.replace("beauty","beautiful"))
//split
const text2="Game is Over";
console.log(text2.split(''))
console.log(text2.split(' '))
console.log(text2.split('is'))
//slice
const text4="Hello World"
console.log(text4.slice(1,4))
console.log(text4.slice(-5,-1))
console.log(text4.slice(4))
console.log(text4.slice(-4))
//substring(negative is count zero)
const text5="Programming is beauty"
console.log(text5.substring(4,2))
console.log(text5.substring(-6,2))
//concat & charAt
const text3="Hi"
console.log(text3.concat(", I","am khan"))
console.log(text3.charAt(0))
console.log(text3.charCodeAt(0))//Asci code
//uppercase lowercase index
const text6="Hello World"
console.log(text6.toUpperCase())
console.log(text6.toLowerCase())
console.log(text6.indexOf('l'))
console.log(text6.lastIndexOf('l'))
console.log(typeof text6)
//trim
const text7="    Ninja Course  "
console.log(text7.length)
const newText=text7.trim()
console.log(newText.length)
//includes(follow sequence)
const text8="I have well done"
console.log(text8.includes('do'))
console.log(text8.includes('ve'))
//startsWith & endswith
const text9="Hello World"
console.log(text9.startsWith("Hel"))
console.log(text9.endsWith("World"))
//number(NaN=Not a Number), parseInd base count(binary/decemal/ocatl/hexa...)
console.log(typeof "5")
console.log(Number("10"))
console.log(Number("10ab"))
console.log(parseInt("a10ab"))
console.log(typeof NaN)
console.log(parseInt(2020,8))
console.log(parseInt(2020,10))
console.log(parseInt(101,2))
console.log(parseInt(2020.28))
console.log(parseFloat(2020.28))
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
const n1=25.255343
console.log(n1.toFixed(3))
console.log(n1.toPrecision(3))
console.log(n1.toExponential(3))
//BigInd
let n2=9999999999999999999999
console.log(n2)
let n3=BigInt("999999999999999999999")
console.log(n3)
console.log(typeof n2)
console.log(typeof n3)






















