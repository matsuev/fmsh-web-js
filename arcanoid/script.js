const gameBoard = document.getElementById("gameBoard")
const racket = document.getElementById("racket")
const ball = document.getElementById("ball")

var gameOver = false

var racketObj = {
   X: racket.offsetLeft,
   L: racket.clientWidth,
   dX: 10,
}

var ballObj = {
   X: ball.offsetLeft,
   Y: ball.offsetTop,
   R: 20,
   dX: 3,
   dY: -3,
}


function onArrowKeyDown(ev) {
   if ((ev.code == "ArrowRight") && (racketObj.X + racketObj.L + racketObj.dX < gameBoard.clientWidth)) {
      racketObj.X += racketObj.dX
   }

   if ((ev.code == "ArrowLeft") && (racketObj.X > racketObj.dX)) {
      racketObj.X -= racketObj.dX
   }

   racket.style.left = racketObj.X + "px"
}

document.addEventListener("keydown", onArrowKeyDown)

function moveBall() {
   if (ballObj.X + ballObj.dX < 0) {
      ballObj.dX *= -1
   }

   if (ballObj.X + ballObj.dX + 2*ballObj.R > gameBoard.clientWidth) {
      ballObj.dX *= -1
   }

   if (ballObj.Y + ballObj.dY < 0) {
      ballObj.dY *= -1
   }

   if (ballObj.Y + ballObj.dY + 2*ballObj.R > gameBoard.clientHeight) {
      gameOver = true
      alert("Game over!")
   }


   ballObj.X += ballObj.dX
   ballObj.Y += ballObj.dY

   ball.style.left = ballObj.X + "px"
   ball.style.top = ballObj.Y + "px"

   if (!gameOver) {
      window.requestAnimationFrame(moveBall)
   }
   
}

window.requestAnimationFrame(moveBall)