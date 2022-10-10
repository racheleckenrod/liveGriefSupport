// const io = require("socket.io")

const socket = io(window.location.hostname);

let timeClock 

socket.on('timeClock', data => {
    console.log(data)
    timeClock = document.getElementById('time').innerHTML = data
   
})

socket.on('timeData', (timeString2) => {
    el = document.getElementById('currently');
    el.innerHTML = 'Current time: ' + timeString2;
})

