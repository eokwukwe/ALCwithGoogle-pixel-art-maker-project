// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(event) {
  event.preventDefault(); // prevent form from submitting

  // Get the values for the grid height and width
  const row = $("#inputHeight").val();
  const col = $("#inputWeight").val();

  //makeGrid();
  makeGrid(row, col);
});

function makeGrid(row, col) {
  // remove any existing table
  $("tr").remove();

  // Create the table
  for (let i = 0; i < row; i++) {
    const tRow = $("<tr></tr>");
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
