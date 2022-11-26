let firstNumber=0;
let secondNumber=0;
let intermediaryNumber=0;
let OperatorPressed=0;
let Operator="";
let resultOperation=0;
let showScreen="";
let dotUsed=0;
let isUsed=0;
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
    if(arguments[0]=="/")firstNumber=intermediaryNumber;
    return divide(arguments[1],arguments[2]);
}
function updateResult(){
    if(arguments[0]){
      
    rezult.textContent+=arguments[0];
    }
    result.textContent=showScreen;
}
/// result
const result = document.querySelector(".result");

/// buttons
const addOp = document.querySelector(".addOp");
const substractOp = document.querySelector(".substractOp");
const multiplyOp = document.querySelector(".multiplyOp");
const divideOp = document.querySelector(".divideOp");
const equalOp = document.querySelector(".equalOp");
const clearOp = document.querySelector(".Clear")
const pointDecimal= document.querySelector(".point");
 
/// numbers
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

result.textContent=intermediaryNumber;
//result.textContent="ABCD";
pointDecimal.addEventListener('click',e => {
   // let a =intermediaryNumber.toFixed(0);
   // if(a==intermediaryNumber)
    if(dotUsed==0){
    intermediaryNumber=intermediaryNumber+".";
    dotUsed++;
    }
    showScreen=intermediaryNumber;
    updateResult();
});
zero.addEventListener('click', e => {
   // intermediaryNumber=intermediaryNumber*10+0;
  // if(intermediaryNumber==0)
   //intermediaryNumber=0;
   //else
   intermediaryNumber=intermediaryNumber+"0";
    showScreen=intermediaryNumber;
    updateResult();
});
one.addEventListener('click', e => {
   // intermediaryNumber=intermediaryNumber*10+1;
   if(intermediaryNumber==0 && dotUsed==0)
   intermediaryNumber=1;
   else
   intermediaryNumber=intermediaryNumber+"1";
    showScreen=intermediaryNumber;
    updateResult();
});
two.addEventListener('click', e => {
  //  intermediaryNumber=intermediaryNumber*10+2;
  if(intermediaryNumber==0 && dotUsed==0)
  intermediaryNumber=2;
  else
  intermediaryNumber=intermediaryNumber+"2";
    showScreen=intermediaryNumber;
    updateResult();
});
three.addEventListener('click', e => {
    //intermediaryNumber=intermediaryNumber*10+3;
    if(intermediaryNumber==0 && dotUsed==0)
    intermediaryNumber=3;
    else
    intermediaryNumber=intermediaryNumber+"3";
    showScreen=intermediaryNumber;
    updateResult();
});
four.addEventListener('click', e => {
  //  intermediaryNumber=intermediaryNumber*10+4;
  if(intermediaryNumber==0 && dotUsed==0)
  intermediaryNumber=4;
  else
  intermediaryNumber=intermediaryNumber+"4";
    showScreen=intermediaryNumber;
    updateResult();
});
five.addEventListener('click', e => {
   // intermediaryNumber=intermediaryNumber*10+5;
   if(intermediaryNumber==0 && dotUsed==0)
   intermediaryNumber=5;
   else
   intermediaryNumber=intermediaryNumber+"5";
    showScreen=intermediaryNumber;
    updateResult();
});
six.addEventListener('click', e => {
   // intermediaryNumber=intermediaryNumber*10+6;
   if(intermediaryNumber==0 && dotUsed==0)
   intermediaryNumber=6;
   else
   intermediaryNumber=intermediaryNumber+"6";
    showScreen=intermediaryNumber;
    updateResult();
});
seven.addEventListener('click', e => {
   // intermediaryNumber=intermediaryNumber*10+7;
   if(intermediaryNumber==0 && dotUsed==0)
   intermediaryNumber=7;
   else
   intermediaryNumber=intermediaryNumber+"7";
    showScreen=intermediaryNumber;
    updateResult();
});
eight.addEventListener('click', e => {
   // intermediaryNumber=intermediaryNumber*10+8;
   if(intermediaryNumber==0 && dotUsed==0)
   intermediaryNumber=8;
   else
   intermediaryNumber=intermediaryNumber+"8";
    showScreen=intermediaryNumber;
    updateResult();
});
nine.addEventListener('click', e => {
   // intermediaryNumber=intermediaryNumber*10+9;
   if(intermediaryNumber==0 && dotUsed==0)
   intermediaryNumber=9;
   else
   intermediaryNumber=intermediaryNumber+"9";
    showScreen=intermediaryNumber;
    updateResult();
});

addOp.addEventListener('click', e => {
    firstNumber=intermediaryNumber;
    intermediaryNumber=0;
    Operator="+";
    if(dotUsed==1)
    isUsed=1;
    dotUsed=0;
    showScreen=firstNumber + " " + Operator;
    updateResult();
})
substractOp.addEventListener('click', e => {
    firstNumber=intermediaryNumber;
    intermediaryNumber=0;
    Operator="-";
    if(dotUsed==1)
    isUsed=1;
    dotUsed=0;
    showScreen=firstNumber + " " + Operator;
    updateResult();
})
multiplyOp.addEventListener('click', e => {
    firstNumber=intermediaryNumber;
    intermediaryNumber=0;
    Operator="*";
    if(dotUsed==1)
    isUsed=1;
    dotUsed=0;
    showScreen=firstNumber + " " + Operator;
    updateResult();
})
divideOp.addEventListener('click', e => {
    firstNumber=intermediaryNumber;
    intermediaryNumber=0;
    Operator="/";
    if(dotUsed==1)
    isUsed=1;
    dotUsed=0;
    showScreen=firstNumber + " " + Operator;
    updateResult();
})
equalOp.addEventListener('click', e => {
    if(Operator==""){
  //  alert(`Please use "=" after you input an equation`);
    
    }
    else { 
   // let b=operate(Operator,firstNumber,secondNumber);
    secondNumber=intermediaryNumber;
    let b=operate(Operator,firstNumber,secondNumber);
    showScreen+=" "+secondNumber;
    if(b-b.toFixed(0) == b-b){
      resultOperation=operate(Operator,firstNumber,secondNumber).toFixed(0);
      dotUsed=0;
    }
      else{
    resultOperation=operate(Operator,firstNumber,secondNumber).toFixed(1);
    dotUsed=1;}
   firstNumber=0;
   secondNumber=0;
   Operator="";
  //  if(isUsed==1)
       // dotUsed=1;
   // else dotUsed=0;
   // isUsed=0;
  // dotUsed=0;
    intermediaryNumber=resultOperation;
    result.textContent=resultOperation;
    }
   // alert(resultOperation);
    //alert(showScreen);
})
clearOp.addEventListener('click', e => {
    firstNumber=0;
    secondNumber=0;
    dotUsed=0;
    intermediaryNumber=0;
    result.textContent=0;
})