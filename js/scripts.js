$(document).ready(function() {
  $("form#items").submit(function(event) {
    const item1 = $("input#item1").val();
    const item2 = $("input#item2").val();
    const item3 = $("input#item3").val();
    const item4 = $("input#item4").val();

    const list = [item1, item2, item3, item4];
    list.sort();

    list.forEach(function(element){
      $("#grocery-list").append("<li>" + element.toUpperCase() + "</li>")
    });

    $("form#items").hide();
    $(".output").show();

    event.preventDefault();
  });
});