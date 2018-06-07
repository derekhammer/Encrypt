var codeSquare = function(code)
{
  // var squareRoots = ["4","9","16","25","36","42","64","81","100","121", "144", "169", "196", "225", "256", "289", "324", "361", "400"];
  // var decoder = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

  var spacelessSentence = code.replace(/\s/g, '');
  var wordsArray = spacelessSentence.split("");
  var arrayLength = wordsArray.length;
  var squareRoot = Math.sqrt(arrayLength);
  var finalRoot = Math.ceil(squareRoot);
  alert(squareRoot);
  alert(finalRoot);

  for (index = 0: index > squareRoot; indexx++)
  {
    var arrayPosition = wordsArray[index];
    var arrayOne = arrayPosition.push(wordsArray[index]);

    // for (index = 0; index < arrayLength; index++)
    // {
    //
    // }
  }
  alert(arrayOne);
}








//front end

$(document).ready(function()
{
  $("#sentence-input").submit(function(event)
  {
    event.preventDefault();
    var userInput = $("#the-sentence").val();
    var results = codeSquare(userInput);
    //alert(results);
  });

});
