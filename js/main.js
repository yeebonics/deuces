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
    document.title = "Deuces | Scoreboard";
  } else {
    $("#rules").addClass("active");
    $("#scoreboard").removeClass("active");
    $(".title-head").text("Official Ruleset")
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

$("#last-updated").text("as of May 23, 2021");


$.getJSON("js/scoreboard.json", function (data) {
  data.sort(function (a, b) {
    return b.score - a.score;
  })
  renderTable(data)
})

function renderTable(arr) {
  var score = "score";
  var games = "games"
  createTableRow(score, arr) 
}

function createTableRow(data, arr) {
  var counter = 1;
  

  arr.forEach(function (el) {
    var winRate = el["score"] / el["games"];
    var roundedRate = (winRate * 100).toFixed(1)

    //console.log(counter);
    $('#table-body').before(`<tr class="row"> <td>  ${counter} </td>  <td>  ${el["player"]} </td>   <td>  ${el["score"]} </td> <td>${el["games"]} </td> <td>${roundedRate}%</td> </tr>`);
    counter++;
  })
}
