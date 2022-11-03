let clock = document.getElementById("clock");
let date = document.getElementById("date");
let globalDate = new Date();

const getTime = () => {
  let fullTime = new Date();

  let hour = fullTime.getHours();
  let minute = fullTime.getMinutes();
  let second = fullTime.getSeconds();

  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;

  return hour + ":" + minute + ":" + second;
};

setInterval(
  function () {
    clock.innerHTML = getTime();
  },
  0,
  1000
);

setInterval(
  function () {
    date.innerHTML =
      globalDate.getDate() +
      "/" +
      globalDate.getMonth() +
      "/" +
      globalDate.getFullYear();
  },
  0,
  86400000
);
