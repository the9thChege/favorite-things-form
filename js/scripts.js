$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var rangiInput = $("input#rangi").val();
    var animalInput = $("input#animal").val();
    var songInput = $("input#song").val();
    var holidayInput = $("input#holiday").val();

    $(".rangi").text(rangiInput);
    $(".animal").text(animalInput);
    $(".song").text(songInput);
    $(".holiday").text(holidayInput);

    $("#report").show();

    var combineArray = [rangiInput, animalInput, songInput, holidayInput];
    var secondArray = [];
    secondArray.push(combineArray[1], combineArray[0], combineArray[2]);

    var divx = document.getElementById('listings');

    var ul = document.createElement('ul');

    for (var i in secondArray) {
      var li = document.createElement('li');
      thelist = document.createTextNode(secondArray[i]);

      li.appendChild(thelist);
      ul.appendChild(li);
    }

    divx.appendChild(ul);

    event.preventDefault();
  });
});
