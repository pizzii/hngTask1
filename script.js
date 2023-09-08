let time = document.getElementById('time');
let day = document.getElementById('day');

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
});

function formatDay() {
  let date = new Date();
  const Days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return `${Days[date.getDay()]}`;
}

day.innerHTML = formatDay().toString();
