function Cell(i, j, x, y, w) {
  this.i = i;
  this.j = j;
  this.x = x;
  this.y = y;
  this.w = w;
  this.light = false;
  if (random(1) < 0.5) {
    this.light = true;
  }
}

Cell.prototype.show = function() {
  
  stroke(0);
  //fill(255);

  if (!this.light) {
    fill(75);
  } else {
    fill(255, 215, 0, 150);
  }

  rect(this.x, this.y, this.w, this.w);

  fill(135, 206, 235);
  textAlign(LEFT);
  textSize(75);

  if (n == 0) {
    text('You Win!', 50, 170, 400, 300);
  }
}

Cell.prototype.contains = function(x, y) {
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);

}

Cell.prototype.toggle = function() {

  for (var xoff = -1; xoff <= 1; xoff++) {
    for (var yoff = -1; yoff <= 1; yoff++) {

      var i = this.i + xoff;
      var j = this.j + yoff;

      if (i > -1 && i < cols && j > -1 && j < rows) {

        var neighbour = grid[i][j];

        if (xoff + yoff != 0 && xoff + yoff != 2 && xoff + yoff != -2) {
          if (neighbour.light) {
            neighbour.light = false;
            n--;
          } else if (!neighbour.light) {
            neighbour.light = true;
            n++;
          }
        }
      }
      if (this.light) {
        this.light = false;
        n--;
      } else if (!this.light) {
        this.light = true;
        n++;
      }
    }
  }
}

Cell.prototype.count = function() {
  if (this.light) {
    n++;
  }
}

Cell.prototype.checkSolvable = function(i, j) {
        if (quiet1[i][j] && this.light)  { s++; }
        if (quiet2[i][j] && this.light) { t++; }
}  

