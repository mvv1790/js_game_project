
let gameCanvas = document.getElementById('gameCanvas');

const ctx = gameCanvas.getContext ('2d');



window.addEventListener('keydown',(event) => {
    console.log(event.key)
})

class Sprite {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
        this.height = 10
        this.width = 10
    }
    crateSprite(){
        ctx.fillStyle = '#F9DC5C'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        
    }
    refreshAnimation() {
        this.crateSprite()
        this.position.x += this.velocity.x

        if (this.position.x + this.width + this.velocity.x >= gameCanvas.width) {
            this.velocity.x = 0
        }

    }
}

const player = new Sprite ({
    position: {
    x:15,
    y:120
},
    velocity: {
    x:1,
    y:0, 
    }
})

player.crateSprite()

console.log(player)
function animations() {
    ctx.fillStyle ='black'
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height)
    window.requestAnimationFrame(animations)
    player.refreshAnimation()
}

animations()