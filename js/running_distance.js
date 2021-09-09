/*created by René Seebach */
'use strict'

function runningDistance(){
    let kmDistance = document.getElementById('numberForRunningKm').value;
    let kmTime = document.getElementById('numberForRunningTime').value;

    let test = parseInt(kmDistance);
  
    /* substing three times */
    let hours = kmTime.substring(0,2);
    let minutes = kmTime.substring(2,4);
    let seconds = kmTime.substring(4,6);

    if (kmTime != 0 && kmDistance != 0){

    /* Get seconds */  
    let sec = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);
     
    /* gets seconds per km*/ 
    let kmTimePerHour = sec / kmDistance -0;
  
    /* converts seconds to the user: hours, minutes and seconds */
    let h = Math.floor(kmTimePerHour / 3600);
    let m = Math.floor(kmTimePerHour % 3600 / 60);
    let s = Math.floor(kmTimePerHour % 3600 % 60);

    

    return document.getElementById('result').innerHTML = "= " + h + " hours, " +  m + " minutes, " + s + " seconds per kilometer";
    }else{  
    return document.getElementById('result').innerHTML = "= Error: you have to input valid numbers";
    }
    
}


