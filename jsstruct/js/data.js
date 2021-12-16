
class Brick {
   constructor(x, y, color) {
      this.x = x
      this.y = y
      this.color = color

      this._el = document.createElement("div")
      
      this._el.classList.add("brick")
      this._el.style.backgroundColor = this.color
      this._el.style.top = this.y + "px"
      this._el.style.left = this.x + "px"
      this._el.addEventListener("click", this.onClick)
      this._el.addEventListener("mousemove", this.onMouseMove)
   }

   PrintColor() {
      console.log(this.color)
   }

   onClick = () => {
      this._el.innerText = "This is " + this.color + " brick"
   }

   onMouseMove() {
      this.innerText = "Move"
   }
}
