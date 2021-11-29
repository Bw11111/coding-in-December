var btc = 0;
var autoclick = 1;
var btcsave;
var btcsave2;
var ckie;
var btcper = 1;
var rebirthcost = 1000000;
var rebirthcount = 0;
var auto;
function addclicks() {
  var audio = new Audio('coins.mp3');
  audio.play();
  btc += btcper;
  
  function updatebtc() {
    document.getElementById("btcdisp").innerHTML = btc;
    
    if(btc == 500) {
      alert('you have earned the autoclicker!')
    }
  }
  updatebtc()
}
function stopauto() {
    clearInterval(auto);
        document.cookie = btc + "; expires=Thu, 18 Dec 2013 12:00:00 UTC";
        parseInt(document.cookie);
        window.location.replace("index.html");
        btc = document.cookie;
        document.getElementById("btcdisp").innerHTML = btc;
}

function autoclicker() {
    if(btc > 500) {
      auto = setInterval(addclicks, 500);
    
      document.getElementById("autor").setAttribute("onclick", "stopauto()")
    }else{
      console.log("not $");
    }
}
   
  



function autocheck() {
  if(btc > 500) {
    autoclicker()
    document.getElementById("autor").setAttribute("onclick", "")
  }
}
function opensettings() {
  document.getElementById("settings").style.display = "block";
  document.getElementById("clicker").style.display = "none";
  document.getElementById("gear").setAttribute("onclick", "closesettings()");
  document.getElementById("shoppng").style.display = "none";
  
}
function closesettings() {
  document.getElementById("clicker").style.display = "block";
  document.getElementById("settings").style.display = "none";
  document.getElementById("gear").setAttribute("onclick", "opensettings()");
  document.getElementById("shoppng").style.display = "block";
}
function checkcode() {
  var codes = document.getElementById("code").value;
  if(codes == "FREEREBIRTH") {
    btc += 1000000;
  }else {
    if(codes == "adfisjihadsfjfdsaijafsidjafsijafsijeijijijijiji") {
      btc += 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000*btc;
      btc = btc*btc*btc;
    }else{
  if(codes == "Release" || codes == "B1tc01n" || codes == "release" || codes == "b1tc01n") {
    document.getElementById("code").setAttribute("placeholder", "code accepted!");
    btc += 100;
    document.getElementById("btcdisp").innerHTML = btc;
  
  }else{
    document.getElementById("code").setAttribute("placeholder", "Not A Code");
  }
  }
  }
}
function resetdata() {
  var conf = window.confirm("are you sure you would like to reset data?");
  if(conf == true) {
    
    window.location.replace("https://bitcoin-clicker.bw1111.repl.co")
    return "reset";
  }
}
function rebirth() {
  if(btc > rebirthcost) {
    var conf2 = window.confirm("would you like to rebirth for " + rebirthcost + " btc?")
    if(conf2 == true) {
      var audio2 = new Audio('rocket.wav');
      audio2.play();
        document.getElementById("btcdisp").innerHTML = "0";
        btcper += 1;
        
        btc = 0;
        rebirthcost += 1000000;
        rebirthcount += 1;
        console.log(rebirthcount + "rebirth(s)");
        btcper++
    }else{
      alert("cancelled rebirth")
    }
  }else{
    
    var audio2 = new Audio('bruh.mp3');
    audio2.play();
    alert("you dont have enough to rebirth!")
    
  }
}
function openmini1() {
  document.getElementById("clicker").style.display = "none";
  
}
function startmini1() {
  
}
function openshop() {
  document.getElementById("shop").style.display = "block";
  document.getElementById("clicker").style.display = "none";
  document.getElementById("shoppng").setAttribute("onclick", "closeshop()");
   document.getElementById("gear").style.display = "none";
}
function stopboost() {
  btcper--
}
function buyboost1() {
  if(btc > 400) {
  setTimeout(stopboost, 60000);
  btcper++

  btc -= 400;
  document.getElementById("btcdisp").innerHTML = btc;
  }
}
function closeshop() {
  document.getElementById("shop").style.display = "none";
  document.getElementById("clicker").style.display = "block";
  document.getElementById("shoppng").setAttribute("onclick", "openshop()");
  document.getElementById("gear").style.display = "block";
}

function loader() {
  document.getElementById("gear").style.display = "block";
  document.getElementById("shoppng").style.display = "block";
  document.getElementById("clicker").style.display = "block";
  document.getElementById("prgs").style.display = "none";
  document.getElementById("loaddd").style.display = "none";
  document.getElementById("wlcom").style.display = "none";
}
function loadd() {
  setTimeout(loader, 5000)
}
loadd()