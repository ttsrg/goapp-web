function getSum() {
  var a = $("#a").val()
  var b = $("#b").val()

  console.log("Summing: " + a + " and " + b);

  $.get("http://localhost:8080/sum/?a=" + a + "&b=" + b, function( data ) {
    $("body")
      .append(" Status: " + data.Status)
	  .append(" Result: " + data.Result + "<br>")
    }, "json");

}

function getDiff() {
  var a = $("#a").val()
  var b = $("#b").val()

  console.log("Difference between: " + a + " and " + b);

  $.get("http://localhost:8080/diff/?a=" + a + "&b=" + b, function( data ) {
    $("body")
      .append(" Status: " + data.Status)
      .append(" Result: " + data.Result + "<br>")
    }, "json");

}
