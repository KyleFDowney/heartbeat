function heartBeat (){
  heartBeat2();
  setTimeout(heartBeat1,150)
  setTimeout(heartBeat2,300)
  setTimeout(heartBeat1,450)
  setTimeout(heartBeat2,1150)
  setTimeout(heartBeat1,1300)
  setTimeout(heartBeat2,1450)
  setTimeout(heartBeat1,1600)
  setTimeout(heartBeat,2300)
}


function heartBeat2 (x,y){
    var x = document.querySelector("heart").style.fontSize = "20em";
    var y = document.querySelector("heart").style.color = "#ff5d7a";
    console.log("this works");
  }

function heartBeat1 (x,y){
  var x = document.querySelector("heart").style.fontSize = "19em";
  var y = document.querySelector("heart").style.color = "#f994a6";
  console.log("this works");
  }
