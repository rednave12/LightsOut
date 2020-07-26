function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}


var s = 2;
var t = 2;
var n = -1;
var grid;
var quiet;
var cols = 5;
var rows = 5;
var w = 80;

function setup() {

  quiet1 = make2DArray(5, 5);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if (i == j || i + j == 4) {
        quiet1[i][j] = false;
      } else {
        quiet1[i][j] = true;
      }
    }
  }

  quiet2 = make2DArray(5, 5);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if (j == 1 || j == 3 || i == 2) {
        quiet2[i][j] = false;
      } else {
        quiet2[i][j] = true;
      }
    }
  }

  grid = make2DArray(5, 5);

  while (s != 0 || t != 0) {

    s = 2;
    t = 2;
    for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        grid[i][j] = new Cell(i, j, i * w, j * w, w);
        grid[i][j].checkSolvable(i, j);
        //console.log(s);
      }
    }
    console.log(s);
    console.log(t);
    t = t % 2;
    s = s % 2;
  }

  createCanvas(400, 400);
}

function mousePressed() {
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {
        grid[i][j].toggle();
      }
    }
  }
  n = 0;
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].count();
    }
  }
}

function draw() {
  background(220);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}