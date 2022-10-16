const elDays = document.getElementById('days');
const elHours = document.getElementById('hours');
const elMinutes = document.getElementById('minutes');
const elSeconds = document.getElementById('seconds');
const elCurrentDate = document.querySelector(".current__date");

const time = new Date();

const dates = time.toDateString();

elCurrentDate.textContent = dates;

const newY = "1 Aug 2023";
// const newY = prompt("Enter a countdown time: \nExample: 18 Oct 2022");

function countdown() {
    const Dates = new Date(newY);
    const currentDate = new Date();

    const totalSeconds = (Dates - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    elDays.innerHTML = days;
    elHours.innerHTML = formatTime(hours);
    elMinutes.innerHTML = formatTime(minutes);
    elSeconds.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// if (elDays.innerHTML === '0') {
//     alert('Please select a days');
// }

countdown();

setInterval(countdown, 1000);
// countdown();