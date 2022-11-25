function add (){
    let a = +arguments[0];
    let b = +arguments[1];
    return a+b;
}
function subtract (){
    let a = +arguments[0];
    let b = +arguments[1];
    return a-b;
}
function multiply (){
    let a = +arguments[0];
    let b = +arguments[1];
    return a*b;
}
function divide (){
    let a = +arguments[0];
    let b = +arguments[1];
    return a/b;
}
function operate (){
    if(arguments[0]=="+")
    return add(arguments[1],arguments[2])
    if(arguments[0]=="-")
    return subtract(arguments[1],arguments[2]);
    if(arguments[0]=="*")
    return multiply(arguments[1],arguments[2]);
    if(arguments[0]=="/")
    return divide(arguments[1],arguments[2]);
}
let xd=operate("-",3,5);
console.log(xd + " " +typeof(xd));