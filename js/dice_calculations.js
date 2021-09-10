'use strict'

function rollDice() {  

    let experimentsNumber = document.getElementById('numberForExperiments').value;
    let desiredOutcome = document.getElementById('numberForDesiredOutcome').value;

    let outcomeFirst = desiredOutcome.substring(0,1) -0;
    let outcomeSecond = desiredOutcome.substring(1,2) -0;
    let count = 1;  
    let findNumber = experimentsNumber;
    
    /* creates two loops where the first one counts until the outcomes and the outer counts times running*/
    if(outcomeFirst != 0 && outcomeSecond != 0){
    /* first while loop is counting down on findNumber */
      while(findNumber > 0){
          /* second while loop is checking how many times it takes to reach desired outcome from variable outcomeFirst and outcomeSecond. */
        while(true){
            let RandomNumberDice = Math.floor(Math.random() * 6) + 1;
            let RandomNumberDice2 = Math.floor(Math.random() * 6) + 1;
            if(RandomNumberDice == outcomeFirst && RandomNumberDice2 == outcomeSecond){
                findNumber--;
                break;
            }
            count++;
        }
      }

    
        /* gets the average from experiment: experiment / total amount of calculate the numbers that took to get the desired outcome.*/
        let resultAverage = experimentsNumber / count;
        console.log(resultAverage + " average");
    
        return document.getElementById('resultDice').innerHTML = "= " + resultAverage.toFixed(5) +  " Average to get desired outcome!"

    }else
        return document.getElementById('resultDice').innerHTML = "= Error! you cannot but zero value into the fields!"
   
}
