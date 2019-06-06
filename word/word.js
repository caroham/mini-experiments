let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

$( document ).ready(function() {
    let letterInterval;
    $(".letter").mouseover(function(e){
        let hoveredLetter = $(e.target).html();
        console.log("hovered letter: ", hoveredLetter);
        let letterIdx = alphabet.indexOf(hoveredLetter);
        letterInterval = setInterval(function(){
            letterIdx = (letterIdx > (alphabet.length-1)) ? 0 : letterIdx+1;
            console.log("letterIdx: ", letterIdx, ", letter: ", alphabet[letterIdx]);
            $(e.target).html(alphabet[letterIdx]);
        }, 300);
    });
    $(".letter").mouseout(function(e){
        clearInterval(letterInterval);
    });
});