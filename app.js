var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 30;

var dx = 2;
var dy = -2;

var ballRadius = 10;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

var rightPressed = false;
var leftPressed = false;

const drawBall = () => {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath()
}

const drawPaddle = () => {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath()
}

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    if(y + dy < ballRadius | y + dy > canvas.height - ballRadius) {
        dy = -dy;
    }

    if (x + dx < ballRadius | x + dx > canvas.width - ballRadius) {
        dx = -dx;
    }

    if(rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    } else if (leftPressed && paddleX < canvas.width - paddleWidth) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
}

const keyDownHandler = (e) => {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed == true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed == true;
    }
}

const keyUpHandler = (e) => {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed == false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed == false;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

setInterval(draw, 10);