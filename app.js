function getSum() {
  var a = $("#a").val()
  var b = $("#b").val()

  console.log("Summing: " + a + " and " + b);

  $.get("https://ttserg.devops.srwx.net/api/sum/?a=" + a + "&b=" + b, function( data ) {
    $("body")
      .append(" Status: " + data.Status)
	  .append(" Result: " + data.Result + "<br>")
    }, "json");

}

function getDiff() {
  var c = $("#a").val()
  var d = $("#b").val()

  console.log("Difference between: " + c + " and " + d);

  $.get("https://ttserg.devops.srwx.net/api/diff/?a=" + c + "&b=" + d, function( data ) {
    $("body")
      .append(" Status: " + data.Status)
      .append(" Result: " + data.Result + "<br>")
    }, "json");

}
