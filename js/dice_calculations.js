'use strict'

function rollDice() {  

    let experimentsNumber = document.getElementById('numberForExperiments').value;
    let desiredOutcome = document.getElementById('numberForDesiredOutcome').value;

    let outcomeFirst = desiredOutcome.substring(0,2) -0;
    let outcomeSecond = desiredOutcome.substring(2,4) -0;  
    
    console.log(outcomeFirst + " See input one");
    console.log(outcomeSecond + " See input two");

    let total = 0;
    let outcomeFirstResult = 0;
    let outcomeSecondResult = 0;
    if(outcomeFirst != 0 && outcomeSecond != 0 && outcomeFirst <= 12 && outcomeSecond <= 12){

        for(let i = 0; i <= experimentsNumber; i++){
            let RandomNumber = Math.floor(Math.random() * 12) + 1;
            console.log(RandomNumber + " random number");
            if(RandomNumber == outcomeFirst){
                outcomeFirstResult ++;
            }
            if(RandomNumber == outcomeSecond){
                outcomeSecondResult ++
            }

            total += RandomNumber;
        
        }
        /* gets the average from experiment */
        let resultAverage = total / experimentsNumber;

        /*mulige udfald / gunstige udfald kunne være en løsning: eks. 36 muligheder og to gunstige udfald outcomeFirst + outcomeSecond  */

        console.log(outcomeFirstResult + " antal mulige slag et");

        console.log(outcomeSecondResult + " antal mulige slag to");
    
    
        return document.getElementById('resultDice').innerHTML = "=  First desired outcome: " + outcomeFirstResult + " times. Second desired outcome:  " + outcomeSecondResult +  " times. Average of "+ experimentsNumber + " experiment: " +  resultAverage.toFixed(1) +  " !"

    }else
        return document.getElementById('resultDice').innerHTML = "= Error! you cannot but zero value into the fields!"
   
}