

function clocktime() {
  let date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  // hour   = hour < 10 ? "0" + hour : hour;

  let amOrPm="AM";
  if(hour>=12){
      amOrPm="PM";
  }

  
  

  if(hour>12){
    hour=hour-12;
    }
    if(hour<10)
    hour="0"+hour;


    minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;


  clockh.innerHTML = `${hour}`
  clockm.innerHTML = `${minute}`
  clocks.innerHTML = `${second}`
  clockap.innerHTML = `${amOrPm}`

  setTimeout(() => {
    clocktime()

  }, 1000);
}





clocktime()