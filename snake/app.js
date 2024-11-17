const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//getContext()会传回一个canvas的drawing context
//drawing context可以用来在canvas内画图
const unit = 20;
const row = canvas.height / unit;
const column = canvas.width / unit;

let snake = []; //array中的每个元素都是object,储存蛇身体的x和y坐标
snake[0] = {
  x: 80,
  y: 0,
};

snake[1] = {
  x: 60,
  y: 0,
};

snake[2] = {
  x: 40,
  y: 0,
};

snake[3] = {
  x: 20,
  y: 0,
};

for (let i = 0; i < snake.length; i++) {
  if (i == 0) {
    ctx.fillStyle = "lightgreen";
  } else {
    ctx.fillStyle = "lightblue";
  }
  ctx.strokeStyle = "white";

  // x, y, width, height
  ctx.fillRect(snake[i].x, snake[i].y, unit, unit);
  ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
}
