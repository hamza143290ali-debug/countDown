const endDate = new Date(2028, 3, 8, 12, 0, 0).getTime();

function updateTime() {

    const currentDate = new Date().getTime();
    const startDate = new Date(2026, 0, 1).getTime(); // or your project start

    const pendingDate = endDate - currentDate;

    let msInDays = 24 * 60 * 60 * 1000;
    let msInHour = 60 * 60 * 1000;
    let msInMinute = 60 * 1000;

    let days = Math.floor(pendingDate / msInDays);
    let extraAfterDays = pendingDate % msInDays;

    let hours = Math.floor(extraAfterDays / msInHour);
    let extraAfterHours = extraAfterDays % msInHour;

    let minutes = Math.floor(extraAfterHours / msInMinute);
    let seconds = Math.floor((extraAfterHours % msInMinute) / 1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
// PROGRESS (REAL FIX)
    let totalTime = endDate - startDate;
    let passedTime = currentDate - startDate;

    let percentage = (passedTime / totalTime) * 100;

    // safety clamp (important)
    if (percentage > 100) percentage = 100;
    if (percentage < 0) percentage = 0;

    document.querySelector(".progress-bar").style.width = percentage + "%";
}
updateTime(); 
setInterval(updateTime, 1000);