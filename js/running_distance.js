'use strict'

function runningDistance(){
    let kmDistance = document.getElementById('numberForRunningKm').value;
    let kmTime = document.getElementById('numberForRunningTime').value;

    let test = parseInt(kmDistance);
    console.log(test);
    
    let hours = kmTime.substring(0,2);
    let minutes = kmTime.substring(2,4);
    let seconds = kmTime.substring(4,6);

    if (kmTime != 0 && kmDistance != 0){

    /*let time4 = (+hours) + (+minutes) * 60 + (+seconds) * 3600;*/
    let time4 = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);
    console.log(time4 + "");
     
    /* gets seconds per km*/ 
    let kmTime = time4 / test -0;
    console.log(kmTime);

    let h = Math.floor(kmTime / 3600);
    let m = Math.floor(kmTime % 3600 / 60);
    let s = Math.floor(kmTime % 3600 % 60);

        console.log('Hours: ' + h);
        console.log('Minutes: ' + m);
        console.log('seconds: ' + s);

    return document.getElementById('result').innerHTML = "= " + h + " hours, " +  m + " minutes, " + s + " seconds per kilometer";
    }else{  
    return document.getElementById('result').innerHTML = "= Error: you have to input valid numbers";
    }
    
}


