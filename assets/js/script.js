
let gameCanvas = document.getElementById('gameCanvas');

let ctx = gameCanvas.getContext ('2d');

const gravity = 0.6

//Player movement keyboard 
window.addEventListener('keydown',(event) => {
    switch (event.key){
        case'd':
        player.velocity.x = 1
        break
        case 'a':
        player.velocity.x = -1
        break
        case'w':
        player.velocity.y = -5
        break
        case's':
        player.velocity.y = 1
        break

    }
    console.log(event.key)
})

window.addEventListener('keyup',(event) => {
    switch (event.key){
        case'd':
        player.velocity.x = 0
        break
        case 'a':
        player.velocity.x = 0
        break
        case'w':
        player.velocity.y = 0
        break
        case's':
        player.velocity.y = 0
        break

    }
    console.log(event.key)
})

class Sprite {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.width = 10
        this.height = 15
        this.attackBox = {
            position: this.position,
            width: 15,
            height: 2
        }
    }
    crateSprite(){
        ctx.fillStyle = '#F9DC5C'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        
        //attack box
        ctx.fillRect (
            this.attackBox.position.x,
            this.attackBox.position.y, 
            this.attackBox.width,
            this.attackBox.height
        )
    }
    refreshAnimation() {
        this.crateSprite()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.x + this.width + this.velocity.x >= gameCanvas.width) {
            this.velocity.x = 0
        }
        if (this.position.y + this.width + this.velocity.y >= gameCanvas.height) {
            this.velocity.y = 0
        } else this.velocity.y += gravity

    }
}

const player = new Sprite ({
    position: {
    x:15,
    y:120
},
    velocity: {
    x:0,
    y:0, 
    }
})

player.crateSprite()

console.log(player)
function animations() {
    window.requestAnimationFrame(animations)
    ctx.fillStyle ='black'
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height)
    player.refreshAnimation()
}

animations()