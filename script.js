const cntdwn = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = 'Sep, 9, 2021 00:00:00';
  const date = new Date(d).getTime();
  const now = new Date().getTime();
  const gap = date - now;

  const sec = 1000;
  const min = sec * 60;
  const hr = min * 60;
  const day = hr * 24;

  // Calculation
  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hr);
  const minutes = Math.floor((gap % hr) / min);
  const seconds = Math.floor((gap % min) / sec);

  // console.log(
  //   days + " Days, " + hours + " Hours, " + minutes + " Minutes, " + seconds + " Seconds"
  // );

if(d){
  document.querySelector(".TimeDay").innerHTML = days;
  document.querySelector(".TimeHour").innerHTML = hours;
  document.querySelector(".TimeMinute").innerHTML = minutes;
  document.querySelector(".TimeSecond").innerHTML = seconds;
  document.querySelector(".date").innerHTML = new Date(d).getDate();
  document.querySelector(".month").innerHTML =
    monthNames[new Date(d).getMonth()];
  document.querySelector(".year").innerHTML = new Date(d).getFullYear();
}
};
setInterval(cntdwn, 1000);
