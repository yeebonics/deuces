$(".nav-link").on("click", function (e) {
  e.preventDefault();
  const target = $(this).find(":first").text();
  const currentActive = $("li").find("li").hasClass("active");
  if ($(this).hasClass("active")) {
    return false;
  } else if (target == "Scoreboard"){
    $("#scoreboard").addClass("active");
    $("#rules").removeClass("active");
    $("#scoreboard").show();
    $(".title-head").text("Current Standings")
    $(".title-caption").text("as of August 30, 2020");
    document.title = "Deuces | Scoreboard";
  } else {
    $("#rules").addClass("active");
    $("#scoreboard").removeClass("active");
    $(".title-head").text("Official Ruleset")
    $(".title-caption").text("For games to be counted towards your score");
    document.title = "Deuces | Rules";
  }
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
})


// onload

/*
  read scores in json
  render the table based on highest score
*/


$.getJSON("js/scoreboard.json", function (data) {
  data.sort(function (a, b) {
    return b.score - a.score;
  })
  renderTable(data)
})

function renderTable(arr) {
  var counter = 1;
  arr.forEach(function (el) {
    console.log(counter);
    $('#score-table tr:last').after(`<tr> <td>  ${counter} </td>  <td>  ${el["player"]} </td>   <td>  ${el["score"]} </td></tr>`);
    counter++;
  })
}
