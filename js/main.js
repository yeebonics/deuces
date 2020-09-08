$(".nav-link").on("click", function (e) {
  e.preventDefault();
  const target = $(this).find(":first").text();
  const currentActive = $("li").find("li").hasClass("active");
  console.log(target);
  console.log(this)
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