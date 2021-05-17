// Simple program to design vasic calculator
const number1=parseFloat(prompt("Enter the first number:"));
const number2=parseFloat(prompt("Enter the second number:"));
//To take th input of an operation to perform
const operator=prompt("Enter the operation you need to perform: Addition(+)  Subtraction(-) Multiplication(*) Division(/)");

if(operator=='+'){
    result=number1+number2;
}
else if(operator=='-'){
    result=number1-number2;
}
else if(operator=='*'){
    result=number1*number2;
}
else if(operator=='/'){
    result=number1/number2;
}
else{
  console.log("Wrong operator");
}

console.log(number1 + operator + number2 + "=" + result);
