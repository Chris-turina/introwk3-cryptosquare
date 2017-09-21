

var cryptosquare = function(input) {
  var output = "";
  input = input.replace(/[^A-Z]/gi, "").toLowerCase();

  var rowLength = Math.floor(Math.sqrt( input.length));
  var cur = 0
  var spaced = 0
  var targetlength = input.length
  for (var i = 0; cur < targetlength; i++) {
    for (var columnid = i; columnid < input.length; columnid += rowLength) {
      var column = input[columnid];
      output = output + column;
      spaced++
      if (spaced >= 5) {
        output = output + " ";
        spaced = 0;
        targetlength = targetlength + 1;
      }
      cur = output.length;
    }
  }
  return output;
}

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var userinput = $("input#user-input").val();
    var output = cryptosquare(userinput);
    $("#user-output").text(output);
  });
});
