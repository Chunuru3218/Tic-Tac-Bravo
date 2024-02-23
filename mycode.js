
/*let age =6;
let price =8;
console.log(price,age);
const product ={
    title: "ball pen",
    rating: 5,
    offer: 450,

};
let mode ="rahul";
let color;
if(mode==="dark"){
    color="dark";
}else if(mode==="blue"){
    color ="blue";
}else if(mode==="pink"){
    color:"pink";
}else{
    color="white";
}
console.log(color);
let cat =25;
cat >=18? console.log("adult"): console.log("not adult");
alert("hello!")
let name =prompt("hello!");
console.log(name);
let num = prompt("enter a number:");
if (num % 5===0){
    console.log(num,"is a multiple of 5")
}else{
    console.log(num,"is not multiple of 5");
}
for(let i=1;i<=5;i++){
    console.log("apna college");
}
console.log("loop has end");
let sum = 0;
for (let i=1;i<=6;i++){
    sum =sum+i;
}
console.log("sum=",sum)
let str= "parle";
for(let i of str){
    console.log("i=",i);
}
let student ={
    name:"babu",
    tarus:"ujhat",
    is : "yes",
};

for (let key in student){
    console.log("key=",key,"value=",student[key])
}

let gameno=23;
let userNum = prompt("guess the number:");
while (userNum != gameno){
    userNum = prompt("you entered the wrong no.:");

}
console.log("you entered the coree no");
let str1 ="tasuka";
console.log(str1[4]);
function myFunction(msg) {
    console.log ("app ka dil");
    console.log ("we are learning");
    console.log(msg*100);
} 
window.alert("hii falguniraj ")
let heading = document. getElementById("heading");
console.log(heading);
let  headings=document.getElementsByClassName
let para = document.querySelector("p");
console.log()
let div = document.querySelector("div")
div.style.backgroundColor ="rahut";
let newBtn = document.createElement("button");
newBtn.innerText ="click me";
console.log(newBtn);
let div = document.querySelector("div");
div.prepend(newBtn);
let newHeading = document.createElement("h1")
newHeading.innerHTML ="<i>Hi,I am new!</i>";
document.querySelector("body").prepend(newHeading);*/

/*myFunction("i love my love",100);
function  sum(x,y){
    s= x+y;
    return s;
}
let val =sum(3,4);
console.log(val);*/


/*console.log("--a=",a);
colet a=5;
console.log("a==b",a!==b);
let a= 6;
let b=5;
let cond1 = a>b;
let cond2 =a<b;
console.log ("cond1 && cond2=",cond1 ||cond2);
let mode= "blue";
let color;

if( mode==="dark"){
    color="black";
}
else if (mode==="blue"){
    color="blue";
}
else if (mode==="pink"){
    color="pink"
}else{
    color="white";
}
console.log(color);
let num = prompt("enter the number:");
if (num%3===0){
    console.log (num,"is a multiple of 3");

}
else{
    console.log(num,"is not multiple of 3");
}
let score = prompt("enter mark:");
let grade;
if (score>=90&& score<=100) 
{
    grade="A";
}else if(score>=70 && score<=89) 
{
    grade="B";
}else if(score>=60 && score<=69)
{
    grade="C";
}else if(score>=50 && score<=59)
{
    grade="D";
}else if(score>=35 && score<=49)
{
    grade="E";
}else if(score>=0 && score<=34)
{
    grade="F";
}
console.log("this is the grade:", grade);
for(let count=1;count<=5;count++){
    console.log("life of pie");//execute 5 times
}
console.log("loop has ended");//print 1-5
let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;

}
console.log("sum=",sum);
console.log("loop has ended");
let i = 1;
while(i<=10){
    console.log("apna college");
    i++;
}
let str="rahul gya bhad main";
let size = 0;
for(let val  of str){
    console.log("i=",val);
    size++;
}
console.log("string size=",size);
let str ="Apna college";
str=str.toLowerCase()
console.log(str); 
//arrays
let marks =[97,82,76,56,78];
console.log(marks);
console.log(marks.length);
let heroes=["ironman","thor"];
console.log(heroes);
console.log(heroes.length);*
let newBtn = document.createElement("button")
let btn1 =document.querySelector("#btn1");
btn1.onclick =(evt)=>{
    console.log(evt.type);
    console.log(evt.type);
    console.log(evt.traget);
};
let div =document.querySelector("div");
div.onmouseover =() =>{
    console.log("you are inside div");
}
//CHANGE Mode
let modeBtn=document.querySelector("#mode");
let currMode= "light";
modeBtn.addEventListener("click",() =>{
    if (currMode ==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor ="black";

    }else{
        currMode="light";
        document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(currMode);
})*/
let boxes =document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg= document.querySelector("#msg");
let turnO =true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetGame=() =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
    
    if(turnO){
        box.innerText="O";
        turnO =false;

    }else{
        box.innerText="X";
        turnO=true;


    }
    box.disabled=true;
    checkWinner();
});
});
const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};
const showWinner =(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=() =>{
    for (let pattern of winPatterns){
        
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;
            if(pos1Val !=""&& pos2Val  != ""&& pos3Val !=""){
                if(pos1Val===pos2Val && pos2Val===pos3Val){
                    console.log("winner",pos1Val);
                    showWinner(pos1Val);
                }
            }


    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);