// Add your code here
"use strict"
function formatDate(date){
  let dayMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let difMs = new Date() - date;
  let difSec = Math.round(difMs / 1000);
  let difMin = difSec / 60;
  let difHour = difMin / 60;


  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayMonth = dayMonth < 10 ? '0' + dayMonth : dayMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  if (difSec < 1) {
    return 'прямо сейчас';
  } else if (difMin < 1) {
    return `${difSec} сек. назад`
  } else if (difHour < 1) {
    return `${difMin} мин. назад`
  } else {
    return `${dayMonth}.${month}.${year} ${hour}:${minutes}`
  }
}