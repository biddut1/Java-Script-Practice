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
//splice

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
//spread(...)operator
const profile2=["Rahim",30]              //for array purpose
const data=[...profile2,"Dhaka",1207, ]
console.log(data);
const profile3={                        //for object purpose
    fName:"Abdul",
    lName:"Salam",
    age:49,
    email:"biddut@gmail.com",
    personTitle:"Mr",
    fullName(){
        return this.personTitle+" "+this.fName+" "+this.lName
    }
}
console.log(profile3.fullName())
const profile4={
    greeting:"Hi",
    ...profile3,
    address:"Dhaka"
}
console.log(profile4)
//rest(...)operator
const profile5=["sumon",30,"Dhaka","Job","Bangla"] //for array purpose
const [firstName,...data1]=profile5
console.log(firstName)
console.log(data1)
const profile6={                        //for object purpose
    fName:"Abdul",
    lName:"Rashid",
    age:49,
    email:"biddut@gmail.com",
    personTitle:"Mr",
    fullName(){
        return this.personTitle+" "+this.fName+" "+this.lName
    }
}
const {fName,...data2}=profile6
console.log(fName)
console.log(data2)
//nested data destructing
const profile7={
    name:"Saiful",
    address:{
        city:"Dhaka",
        zone:"Dhaka-1207",
        permanentAddress:{
            village:"Swerapar",
            postOffice:"Mirpur"
        }
    }
}
console.log(profile7.address.permanentAddress.postOffice)
//console.log(city)
const {address:{city}}=profile7
console.log(city)
const {contact:{phone}={phone:"0177-777777"}}=profile7
console.log(phone)
const {contact:{email:{gmail}={gmail:"biddut@gmail.com"}}={}}=profile7
console.log(gmail)
console.log(profile7)
//nullish coalsing value(??) work for falsy value
//falsy value= 0,null,undefined,true,false,NaN,""
//nullish value(??) cann't work, when it's undefined or null value
const var1=0;
console.log(var1||23)
console.log(var1??23)
const var2="";
console.log(var2||23)
console.log(var2??23)
const var3=null;
console.log(var3||23)
console.log(var3??23)
//optional changing(?.) for finding value
const profile8={                        
    fName:"Jamal",
    lName:"Uddin",
    age:23,
    email:{
        gmail:{
            gmail1:"jamal1111111111@gmail.com",
            gmail2:"jamal2222@gmail.com"
        },
        yahoo:"jamal@yahoo.com"
},
    personTitle:"Mr",
    fullName(){
        return this.personTitle+" "+this.fName+" "+this.lName
    }
}
console.log(profile8)
const gmailJam=profile8.email && profile8.email.gmail && profile8.email.gmail.gmail2 //old version method
console.log(gmailJam)
const gmailJamal=profile8?.email?.gmail?.gmail1
console.log(gmailJamal)
//arguments use by old version
function pro1(data){
console.log(arguments)
}
pro1('sumon',30,'Dhaka',30)
function pro2(...data){ //present use
    console.log(data)
    }
    pro2('sumon',30,'Dhaka',30)
//evalution function or functional expression
function square(num){
    return num * num
}
console.log(square(3))
//another use
 const multiply= function(num){
    return num * num
} 
console.log(multiply(5));
//another use functional expression give auto return          
 const addition=(num)=> num + num

console.log(addition(5))
//another
const pro3={                       
    fName:"Abdul",
    lName:"Rashid",
    personTitle:"Mr",
    fullName(){
        return ()=>{        //return function(){ =undefined undefined undefined showing
        return this.personTitle+" "+this.fName+" "+this.lName
    }
}
}
const proValue=pro3.fullName();
console.log(proValue())

//scope
/*scope 3types- 1.Global, 2.functional 3.block{} 
1.let & const use all type but var use only Global and functional
2.sometime var show undefined in browser(like alert), so we don't use var.
3.scope chain work as bubble up(child to parent)*/
let m=20
function showScopeChain(){
    let n=50
    let m=70
    r=90//without let,const,var is global scope, but it's use not right
    console.log(r)
    //this p doesn't find the value because of bubble up
    function funC(){
        let p=30
        console.log(n)
        console.log(m)
        console.log(p)

    }
    funC()
}
showScopeChain()
//closure scope
function printName(firstName){
   return function inner(lastName){
        return firstName+" "+lastName
    }
}
const partialPrintName=printName("Maruf")//ex-father whill the property to son before date, then property belongs to son
console.log(partialPrintName("Hasan"))

//closure scope ex-2

function playGame(num){
   return ()=>{
    let lifeSpan=num
        console.log('---playing---')
        lifeSpan--
        console.log('---life time---',lifeSpan)
    }
    
}
const player1Play=playGame(3)
console.log(player1Play())
console.log(player1Play())
lifeSpan=10//10 don't work because of lifeSpan 3 use as a functional scope
console.log(player1Play())
//for another player
const player2Play=playGame(3)
console.log(player2Play())
console.log(player2Play())
lifeSpan=10//10 don't work because of lifeSpan 3 use as a functional scope
console.log(player2Play())
//maintaining state
//caching,memorize
function calculation(){
   const result=100*100
    return(num)=>{
        return result+num
    }
}
const cal=calculation()
console.log(cal(10))
console.log(cal(145));
//Hosting
//java script works many small phase like creation phase, excution phase
/*creation phase
initialing variable(set undefined)
function statement declaration*/
/*excution phase
variable value assign
all CALL */
//IIFE(Immediately invoked function expression)
(function(){
    num1=20
    num2=30
    console.log(num1+num2)
})()






















