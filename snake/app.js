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

window.addEventListener("keydown", changeDirection);
let d = "Right";
function changeDirection(e) {
  if (e.key == "ArrowLeft") {
    console.log("left");
  } else if (e.key == "ArrowRight") {
    console.log("Right");
  } else if (e.key == "ArrowUp") {
    console.log("Up");
  } else if (e.key == "ArrowDown") {
    console.log("Down");
  }
}

function draw() {
  //在每一次draw的时候，背景设置为黑色
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //画出蛇
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

  //以目前的d变数方向，来决定蛇的下一帧数放在哪个坐标
  let snakeX = snake[0].x; //snaker[0].x 是一个number, 所以snakeX不是reference data type
  let snakeY = snake[0].y;
  if (d == "Left") {
    snakeX -= unit;
  } else if (d == "Right") {
    snakeX += unit;
  } else if (d == "Up") {
    snakeY += unit;
  } else if (d == "Down") {
    snakeY -= unit;
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  //如果吃到果实
  snake.pop();
  snake.unshift(newHead);
}

let myGame = setInterval(draw, 100);
