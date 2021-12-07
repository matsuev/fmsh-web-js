const gameBoard = document.getElementById("gameBoard")
const racket = document.getElementById("racket")
const ball = document.getElementById("ball")

const pole = [{x:10,y:10}, {x:300,y:30}]

var gameOver = false

var racketObj = {
   Y: racket.offsetTop,
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

initGame()


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
      ballObj.dY *= -1
   }

   // if ((ballObj.Y + ballObj.dY + 2*ballObj.R >= racketObj.Y)
   //    && (ballObj.X - ballObj.R >= racketObj.X)
   //    && (ballObj.X + 2*ballObj.R <= racketObj.X + racketObj.L)) {
   //       ballObj.dY *= -1
   //    }


   // if (ballObj.Y + ballObj.dY + 2*ballObj.R > gameBoard.clientHeight) {
   //    gameOver = true
   //    alert("Game over!")
   // }

   // Math.sin()


   var bricks = document.getElementsByClassName("brick")
   for (var i=0; i<bricks.length; i++) {
      var br = bricks[i]

// Условия пересечения с шариком

      gameBoard.removeChild(br)
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




function initGame() {
   for (var i=0; i<pole.length; i++) {
      createNewBrick(pole[i].x, pole[i].y)
   }
}

function createNewBrick(x, y) {
   var el = document.createElement("div")
   el.classList.add("brick")
   el.style.left = x + "px"
   el.style.top = y + "px"
   gameBoard.appendChild(el)
}