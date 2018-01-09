background(89, 216, 255);

var drawFish = function (x, y, length, height, bodyColour, tailColour, eyeColour, tailWidth, tailHeight, eyeWidth, eyeHeight) {

    noStroke();
    fill(bodyColour);
    // body
    ellipse(x, y, length, height);
    // tail
    fill(tailColour);
    triangle(x - length / 2, y,
             x - length / 2 - tailWidth, y - tailHeight,
             x - length / 2 - tailWidth, y + tailHeight);
    // eye
    fill(eyeColour);
    ellipse(x + length / 4, y, eyeWidth, eyeHeight);
  };

var drawCastle = function (x, y) {

    noStroke();

    // Bottom Sand
    fill(232, 175, 105);
    rect(0, 350, 400, 50);

    fill(252, 190, 119);

    // Left Side towers
    rect(x, y, 52, 50, 5);
    rect(x + 10, y - 45, 30, 50, 5);
    triangle(x + 5, y - 42, x + 45, y - 42, x + 25, y - 70);

    // Right Side Towers
    rect(x + 115, y, 52, 50, 5);
    rect(x + 125, y - 45, 30, 50, 5);
    triangle(x + 120, y - 42, x + 160, y - 42, x + 140, y - 70);

    // Middle Towers
    rect(x + 50, y - 30, 70, 80, 5);
    rect(x + 65, y - 58, 40, 30, 5);
    triangle(x + 55, y - 55, x + 115, y - 55, x + 85, y - 110);

    // Door
    fill(200, 150, 87);
    arc(x + 85, y + 50, 40, 65, 180, 360);
  };

drawCastle(50, 310);

drawFish(200, 100, 164, 74,
        color(251, 255, 8), color(255, 0, 0), color(0, 43, 255),
        50, 25, 10, 10);
drawFish(320, 286, 118, 74,
        color(0, 250, 25), color(255, 0, 238), color(255, 0, 0),
        96, 45, 10, 10);
drawFish(112, 187, 118, 74,
        color(255, 153, 10), color(98, 0, 255), color(0, 43, 255),
        50, 25, 24, 20);

mouseClicked = function () {
    drawFish(mouseX, mouseY, 50 + random(200), 20 + random(50),
        color(random(255), random(255), random(255)), color(random(255), random(255), random(255)), color(random(255), random(255), random(255)), 20 + random(100), 20 + random(50), 10 + random(50), 10 + random(50));
  };
