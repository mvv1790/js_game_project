
let gameCanvas = document.getElementById('gameCanvas');

//canvas context variable

let ctx = gameCanvas.getContext ('2d');

const gravity = 0.6

//Player movement keyboard commands and velocity

window.addEventListener('keydown',(event) => {
    switch (event.key){
        case'd':
        player.velocity.x = 1
        break
        case 'a':
        player.velocity.x = -1
        break
        case'w':
        player.velocity.y = -7
        break
        case's':
        player.velocity.y = 1
        break

    }
    console.log(event.key)
})

//Player keyboard up event, canceles the movement

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

//Player sprite and attack box arc

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

        //Player sprite 

    }
    crateSprite(){
        ctx.fillStyle = '#F9DC5C'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        
        //attack box

        ctx.fillStyle = 'red',
        ctx.fillRect (
            this.attackBox.position.x,
            this.attackBox.position.y, 
            this.attackBox.width,
            this.attackBox.height
        )

        //Refresh animations statements

    }
    refreshAnimation() {
        this.crateSprite()

        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y >= gameCanvas.height) {
            this.velocity.y = 0
        } else this.velocity.y += gravity

        this.position.x += this.velocity.x

        if (this.position.x + this.width + this.velocity.x >= gameCanvas.width) {
            this.velocity.x = 0
        }


    }
}

//Player sprite position and velocity

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

//Animations function, logs the animations to screen

function animations() {
    window.requestAnimationFrame(animations)
    ctx.fillStyle ='black'
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height)
    player.refreshAnimation()
}

animations()