function math(){
    
    
    let n1 = +document.getElementById('num1').value;  
    let n2 = +document.getElementById('num2').value;
    let mathOperator = document.getElementById('operators').value;
    
    
    console.log("n1: " + n1);  
    console.log("n2: " + n2);
    console.log("mathOperator: " + mathOperator);
    
    
    let answer = 0;  
    if (mathOperator === "add") {   
      answer = n1 + n2; // addition
    } else if (mathOperator === "sub") {
      answer = n1 - n2; // subtraction
    } else if (mathOperator === "pow") {
      answer = n1 ** n2; // here the double asterisk "**" will calculate n2 as an exponent of n1
    } else if (mathOperator === "per") { // the math here for the percent calculation has to be done the hard way since there is no percent operator
      answer =  n1 * (n2 / 100); // the first calculation is n1 times the quantity n2 divided by 100 but since JavaScript calculates using PEMDAS order of operations the division inside the parenthases is calculatd before the multiplication.
    } else if (mathOperator === "multi") {
      answer = n1 * n2; // multiplication
    } else if (mathOperator === "div") {
      answer = n1 / n2; // division
    } else if (mathOperator === "loose comparison") {   
      answer = n1 == n2; // here the answer will return true or false since the == is a loose comparison that behaves like a boolean
    } else if (mathOperator === "assignment") {
      answer = n1 = n2; // here the answer will return whatever n2 is since the = is an assignment that declares n1 now represents the value of n2 
    }
    
    document.getElementById("result").textContent = answer;   
  }
    
      document.getElementById("calculate").onclick = math;






