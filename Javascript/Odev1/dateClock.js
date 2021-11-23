
let Name = prompt("Lütfen Adinizi Giriniz: ");
let userName = document.querySelector("#myName");
userName.innerHTML = `${Name}`;

function currentTime() {
    var current = new Date(); 
    var hours = current.getHours();
    var mins = current.getMinutes();
    var seconds = current.getSeconds();
    
    hours = changeTime(hours);
    mins = changeTime(mins);
    seconds = changeTime(seconds);
    var nowTime = hours + " : " + mins + " : " + seconds ; 

    document.querySelector("#myClock").innerHTML = nowTime;

    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var nowDay = days[current.getDay()];

    var nowDate = current.getDate() + '-' + (current.getMonth() + 1) + '-' + current.getFullYear();
    
    document.querySelector("#myDate").innerHTML = nowDate + ' ' + nowDay ;

    var time = setTimeout(function(){ currentTime() }, 500);
}

function changeTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
   
  currentTime();
