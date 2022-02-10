let hour = prompt("Please enter the current hour. Ex:  for 10:30:20 it would be 10")
let minutes = prompt("Please enter the current minutes. Ex: for 10:59:20 it would be 59")
let seconds = prompt("Please enter the current seconds. Ex: for 10:59:25 it would be 25")
if (Number(hour) >= 0 && Number(hour) <=23 &&
    Number(minutes) >= 0 && Number(minutes) <=59 &&
    Number(seconds) >= 0 && Number(seconds) <=59 ) {
    
        console.log(`Time input: ${hour}h${minutes}m${seconds}s`);
        seconds++;
        if(Number(seconds) ==60)
            {
                seconds = 0;
                minutes++;
                    if(Number(minutes) ==60)
                        {
                            minutes = 0;
                            hour++;
                                if(Number(hour) == 24){
                                    hour = 0;
                                }

                        }
            }
        console.log(`One second later: ${hour}h${minutes}m${seconds}s`);
    }
else{
    console.log("Please enter a valid time")
}
