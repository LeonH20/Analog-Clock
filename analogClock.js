const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

// Update clock hands based on the current time
function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // Rotate second hand

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`; // Rotate minute hand

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`; // Rotate hour hand
}

setInterval(setDate, 1000); // Update every second
setDate(); // Set initial time
