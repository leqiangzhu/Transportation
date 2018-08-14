$(document).ready(function() {

  $("#firstSurvey").submit(function(event) {


    $("input:checkbox[name=question-work]:checked").each(function () {

    alert($(this).val());
    });



    event.preventDefault();
  });
});
