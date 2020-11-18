let audioSource;
let playerId = document.getElementById("player");
var sourceOgg = document.getElementById("player");
var sourceMp3 = document.getElementById("player");

let actualWord = document.getElementById("word");
let searchBut = document.getElementById("myBtn");
// let content = document.getElementById("content");
// sourceOgg.src='http://www.w3schools.com/html5/song.ogg';
document.getElementById("content").style.display = "none";
sourceMp3.src;

function checkMeaning() {
  let inputType = document.getElementById("inputText").value;
  //Word result
  actualWord.innerHTML = inputType;

  let actualMeaning = document.getElementById("meaning");
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputType}`)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      data.forEach((meaningObj) => {
        // var soundplayer;
        let sound = meaningObj.phonetics;
        let meaning = meaningObj.meanings;
        let defo;
        for (var i = 0; i < meaning.length; i++) {
          defo = meaning[0].definitions;
        }

        for (var j = 0; j < defo.length; j++) {
         actualMeaning.innerHTML= defo[0].definition;
        }

        console.log(defo);
        //sactual sound
        for (var i = 0; i < sound.length; i++) {}
        let actualSound = sound[0].audio;

        sourceMp3.src = `${actualSound}`;
        player.load(); //just start buffering (preload);
        document.getElementById("content").style.display = "block";
        document.getElementById("diki").style.display = "none";

        // let htmlSegment = `<h1>${}</h1>`

        // html += htmlSegment;
      });
    });
}

searchBut.addEventListener("click", checkMeaning);
