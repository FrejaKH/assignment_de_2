'use strict';

//A page that allows the user to enter two fractions. A fraction consists of a numerator and a denominator. The page must return which of the fractions is larger, and by how much.

function fraction() {
    let n1 = document.getElementById("Numerator1").value;          
    let n2 = document.getElementById("Numerator2").value;
    let d1 = document.getElementById("Denominator1").value;          
    let d2 = document.getElementById("Denominator2").value;
    
    let a = n1 / d1;
    let b = n2 / d2;
  
    let result = a > b ? document.getElementById('result').textContent = "Fraction2 is " + b + " Which means Fraction1 is larger with " + a: document.getElementById('result').textContent = "Fraction1 is " + a + " Which means Fraction2 is larger with " + b;

    document.getElementById('result').textContent = result;  
}