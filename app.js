const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const progress = document.getElementById('progress');

function MyWatch(){
    let date = new Date();
    let Hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour.textContent = Hour < 10 ? ("0" + Hour) : Hour
    minute.textContent = min < 10 ? ("0" + min) : min;
    second.textContent = sec < 10 ? ("0" + sec) : sec;

    progress.style.width = (sec / 60) * 100 + "%"; 
}
setInterval(MyWatch, 1000);