var count =0;
// setInterval(function(){
//     count ++;
//     console.log(count);
// },1000)



var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var btn = document.getElementById('Btn');
var Laps = document.getElementById('laps');
var timer;
var hours = 0;
var seconds = 0;
var mins = 0;
function startTimer(){
    btn.disabled = true;
    timer = setInterval(function(){
        seconds ++;
    

        if(seconds >= 60){
            mins ++;
            seconds = 0;
        }

        if(mins >= 60)
        {
            hours ++;
            mins =0;
            seconds = 0
        }
        sec.innerHTML = seconds;
        min.innerHTML = mins;
        hour.innerHTML = hours;
        
        // console.log(sec);
    
    },500)
}
function stopTimer(){
    clearInterval(timer);
    btn.disabled = false;
    
}

function resetTimer(){
clearInterval(timer);
clearInterval(Laps);
seconds  = 0;
mins = 0;
hours = 0;

        sec.innerHTML = seconds;
        min.innerHTML = mins;
        hour.innerHTML = hours;
        btn.disabled = false;
        // document.getElementById("laps").reset();
     
    

}

function lapTimer() {    
    Laps.innerHTML += "<div>"  + hour.innerHTML + ":" + min.innerHTML + ":" + sec.innerHTML + "<hr>" +  "</div>";
  
}
