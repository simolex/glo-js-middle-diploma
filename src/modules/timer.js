export const timer = (deadLine, hasDays = false) => {
  const timerDays = document.querySelectorAll(".count_1 span");
  const timerHours = document.querySelectorAll(".count_2 span");
  const timerMinutes = document.querySelectorAll(".count_3 span");
  const timerSeconds = document.querySelectorAll(".count_4 span");
  const dateStop = new Date(deadLine).getTime();
  let timerHandle;

  const leadingZero = (num) => (num < 10 ? "0" + num : "" + num);

  const getTimeRemaining = () => {
    const dateNow = new Date().getTime();
    const timeRemaining = (dateStop - dateNow) / 1000;
    const days = Math.floor(timeRemaining / 3600 / 24);
    let hours = Math.floor(timeRemaining / 3600);
    hours = hasDays ? hours % 24 : hours;
    const minutes = Math.floor(timeRemaining / 60) % 60;
    const seconds = Math.floor(timeRemaining) % 60;
    return {
      timeRemaining,
      days: leadingZero(days),
      hours: leadingZero(hours),
      minutes: leadingZero(minutes),
      seconds: leadingZero(seconds),
    };
  };

  const updateClock = () => {
    const getTime = getTimeRemaining();

    if (getTime.timeRemaining <= 0) {
      clearInterval(timerHandle);
    } else {
      for (let i = 0; i < 2; i++) {
        timerDays[i].textContent = getTime.days;
        timerHours[i].textContent = getTime.hours;
        timerMinutes[i].textContent = getTime.minutes;
        timerSeconds[i].textContent = getTime.seconds;
      }
    }
  };

  timerHandle = setInterval(updateClock, 1000);
};
