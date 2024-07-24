// ------------------------------------------DARKMODE

document.addEventListener("DOMContentLoaded", () => {

  let darkInfo;
  if ( !localStorage.getItem("dark") )
      localStorage.getItem("dark", false);
  darkInfo = JSON.parse(localStorage.getItem("dark"));

  const switchDark = () => {
      document.querySelector(".second-page").classList.remove('dark');
      document.querySelector(".dark-mode-icon").classList.remove('dark');
      document.querySelector(".dark-mode-text").classList.remove('dark2');
      document.querySelector(".main").classList.remove('dark3');
    }
    
    const switchLight = () => {
      document.querySelector(".second-page").classList.add('dark');
      document.querySelector(".dark-mode-icon").classList.add('dark');
      document.querySelector(".dark-mode-text").classList.add('dark2');
      document.querySelector(".main").classList.add('dark3');
    }

  if (darkInfo)
      switchDark();
  else
      switchLight();

  document.querySelector(".btn").addEventListener('click', () => {
      if (darkInfo){
          darkInfo = false;
          switchLight();
      } else {
          darkInfo = true;
          switchDark();
      }
      localStorage.setItem("dark", darkInfo);
  })
})

// ------------------------------------------COUTNDOWN
var countDownDate = new Date("Sep 19, 2024 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
})