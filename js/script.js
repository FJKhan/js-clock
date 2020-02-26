const secondHand = document.querySelector(".clock-hand.second");
const minuteHand = document.querySelector(".clock-hand.minute");
const hourHand = document.querySelector(".clock-hand.hour");
setInterval(setDate, 1000);
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    let secondDegrees = (seconds / 60) * 360 + 90;
    let minuteDegrees = (minutes / 60) * 360 + 90;
    let hourDegrees = (hours / 24) * 360 + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    if (secondDegrees === 90) {
        secondHand.style.transition = 'none'
    }
    if (minuteDegrees === 90) {
        minuteHand.style.transition = "none";
    }
    if (hourDegrees === 90) {
        hourHand.style.transition = "none";
    }
}
