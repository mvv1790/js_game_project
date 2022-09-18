

function drawSprites() {

    if (!canvas.getContext) {
        return;
    }

    const canvas =  document.querySelector ('#canvas');
    const ctx = canvas.getContext ('2d');

    
    ctx.fillStyle = '#F9DC5C';
    ctx.fillRect(100, 100, 150, 100);

}

drawSprites();
 