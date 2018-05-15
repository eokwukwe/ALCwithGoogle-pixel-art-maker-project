// Select color input
// Select size input
var row = 0,
  col = 0,
  color = 0;

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(event) {
  event.preventDefault();

  // Get the values for the grid height and width
  row = $("#inputHeight").val();
  col = $("#inputWeight").val();

  //makeGrid();
  makeGrid(row, col);
});

function makeGrid(row, col) {
  // remove any existing table
  $("tr").remove();

  // Create the table
  for (var i = 0; i < row; i++) {
    var tRow = $("<tr></tr>");
    $("#pixelCanvas").append(tRow);
    for (var j = 0; j < col; j++) {
      $(tRow).append("<td></td>");
    }
  }

  // add color to cell
  $("td").click(function() {
    color = $("#colorPicker").val();

    if ($(this).attr("style")) {
      $(this).removeAttr("style");
    } else {
      $(this).attr("style", "background-color: " + color);
    }
  });
}
