function updateTime() {
    const currentTime = new Date();
    var hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    let suffix = 'AM';

    if (hours > 12) {
        hours -= 12
        suffix = 'PM';
    }
    document.getElementById('ampm').textContent = suffix;
    document.getElementById('hour').textContent = hours;
    document.getElementById('mintue').textContent = minutes;
    document.getElementById('second').textContent = seconds;


}

setInterval(updateTime, 1000);