const cntdwn = () => {
  const date = new Date("Sep, 09, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = date - now;

  const ms = 1000;
  const sec = ms * 60;
  const min = sec * 60;
  const hr = min * 60;
  const dy = hr * 24;

  // Calculation
  const day = Math.floor(gap / dy);
  console.log(gap);
};
cntdwn();
