$(document).ready(function() {
  $("#formPuzzle").submit(function(event) {
    event.preventDefault();

    var quote = $("#quote").val();
    var puzzle = [];

    for (var index= 0 ; index < quote.length; index +=1) {
      if (quote[index] === "a" || quote[index] === "e" || quote[index] === "i" || quote[index] === "o" || quote[index] === "u"){
        puzzle += "-";
      } else {
        puzzle += quote[index];
      }
        }
        $("#puzzleText").text(puzzle);
        $("#puzzle").show();
        $("#quote").hide();
      });
    });
