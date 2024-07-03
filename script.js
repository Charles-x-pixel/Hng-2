function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    document.getElementById('time').innerText = utcTime;
}

function updateDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const day = days[now.getUTCDay()];
    document.getElementById('day').innerText = day;
}

setInterval(() => {
    updateTime();
    updateDay();
}, 1000);

updateTime();
updateDay();