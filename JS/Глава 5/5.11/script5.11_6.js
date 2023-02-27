// Add your code here
"use strict"
function getSecondsToTomorrow(){
  let secondsInDay=86400; 
  let date=new Date();
  let hour=date.getHours();
  let minutes=date.getMinutes();
  let seconds=date.getSeconds();
  let secondsInOurDay=(hour*60+minutes)*60+seconds;
  let difference=secondsInDay-secondsInOurDay;
  return difference;
}