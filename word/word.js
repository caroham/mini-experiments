let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

$( document ).ready(function() {
    $(".letter").hover(function(hoveredEl){
        console.log("hovered el: ", hoveredEl);
    });
});