let countdown; 

function startTimer() {
    

    const daysInput = parseInt(document.getElementById("daysInput").value) || 0; 
    const hoursInput = parseInt(document.getElementById("hoursInput").value) || 0; 
    const minutesInput = parseInt(document.getElementById("minutesInput").value) || 0;
    const secondsInput = parseInt(document.getElementById("secondsInput").value) || 0;

    let totalSeconds = 
        (daysInput * 24 * 60 * 60) +  
        (hoursInput * 60 * 60) +      
        (minutesInput * 60) +         
        secondsInput;                  

    if (totalSeconds <= 0) {
        alert("Please enter a valid time!"); 
        return; 
    }

    clearInterval(countdown);

    displayTime(totalSeconds);

    countdown = setInterval(() => { 
        totalSeconds--;
        displayTime(totalSeconds); 

        if (totalSeconds <= 0) { 
            clearInterval(countdown);
            document.getElementById("display").innerHTML = "Time's up!";
        }
    }, 1000); 
}

function displayTime(totalSeconds){
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) /
    (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;
    document.getElementById("display").innerHTML = `${days} days, ${hours} hours, ${minutes
        } minutes, ${seconds} seconds`

      
        
}