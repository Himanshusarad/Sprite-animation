let playerState = 'run';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function (e) {
    playerState = e.target.value;
})
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spritewidth = 575;
const spriteheight = 523;

let gameFrame = 0;
const staggerFrame = 5;
const spriteAnimation = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'gethit',
        frames: 4,
    }

];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spritewidth;
        let positionY = index * spriteheight;
        frames.loc.push({ x: positionX, y: positionY });
    }
    spriteAnimation[state.name] = frames;

});
console.log(animationStates);
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrame) % spriteAnimation[playerState].loc.length;
    let frameX = spritewidth * position;
    let frameY = spriteAnimation[playerState].loc[position].y;
    // ctx.fillRect(100,50,100,100);
    // first four tell us the area to cut out from original image and second four shows us where to put it in that canvas to adjust the postion of image in the box.
    ctx.drawImage(playerImage, frameX, frameY, spritewidth, spriteheight, 0, 0, spritewidth, spriteheight);

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();