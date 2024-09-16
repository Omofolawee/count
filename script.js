// Function to pad numbers with a leading zero if they are less than 10
function padNumber(number) {
  return number < 10 ? "0" + number : number;
}

// Function to update the clock
function updateClock() {
  const now = new Date(); // Get the current date and time
  console.log(now);

  // Format hours, minutes, and seconds with leading zero if necessary
  const hours = padNumber(now.getHours());
  const minutes = padNumber(now.getMinutes());
  const seconds = padNumber(now.getSeconds());
  const day = padNumber(now.getDate());

  // Update the HTML content
  document.querySelector("#hours").textContent = hours;
  document.querySelector("#minutes").textContent = minutes;
  document.querySelector("#seconds").textContent = seconds;
  document.querySelector("#days").textContent = day;
}

// Call the function every second
setInterval(updateClock, 1000);

// Call the function once on page load
updateClock();
