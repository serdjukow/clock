const secDots = document.getElementById("secDots");
const minDots = document.getElementById("minDots");
const hrDots = document.getElementById("hrDots");

const clock = () => {
  let date = new Date();
  let hours = date.getHours() % 12;
  let amPm = date.getHours() >= 12 ? "PM" : "AM";
  hours = hours === 0 ? 12 : hours;

  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let secondsDots = "";
  for (let i = 1; i < 61; i++) {
    let rotation = i * 6;
    if (i === seconds) {
      secondsDots += `<div class="dot active" style="transform: rotate(${rotation}deg)"></div>`;
    } else {
      secondsDots += `<div class="dot" style="transform: rotate(${rotation}deg)"></div>`;
    }
  }

    let minutsDots = "";
    for (let i = 1; i < 61; i++) {
      let rotation = i * 6;
      if (i === minutes) {
        minutsDots += `<div class="dot active" style="transform: rotate(${rotation}deg)"></div>`;
      } else {
        minutsDots += `<div class="dot" style="transform: rotate(${rotation}deg)"></div>`;
      }
    }

      let hoursDots = "";
      for (let i = 1; i < 13; i++) {
        let rotation = i * 30;
        if (i === hours) {
          hoursDots += `<div class="dot active" style="transform: rotate(${rotation}deg)"></div>`;
        } else {
          hoursDots += `<div class="dot" style="transform: rotate(${rotation}deg)"></div>`;
        }
      }

  secDots.innerHTML = `${secondsDots}<b>${amPm}</b><h2>${zero(
    seconds
  )}<br /> <span>Seconds</span></h2>`;
  minDots.innerHTML = `${minutsDots}<h2>${zero(
    minutes
  )} <br /> <span>Minuts</span></h2>`;
  hrDots.innerHTML = `${hoursDots}<h2>${zero(
    hours
  )} <br /> <span>Hours</span></h2>`;
};

function zero(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}

setInterval(clock, 500);
