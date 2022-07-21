let canvas;
let world;
let keyboard = new Keyboard();

function start() {
    document.getElementById('startPage').classList.add('d-none');

    document.getElementById('canvasID').classList.remove('d-none');
}

// function resart(){

// }

// function gameOverWin() {
//     if (gameOverWinVar == true){
//         setTimeout(() => {
//             document.getElementById('gameWOnDiv').classList.remove('d-none')
//             console.log('removed!')
//         }, 1500);
//     }
// }

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);


    console.log('my character is', world.character);

}

window.addEventListener("keydown", (e) => {
    if(e.keyCode == 40) {
        keyboard.down = true;
    };
    if (e.keyCode == 37) {
        keyboard.left = true;
    };
    if (e.keyCode == 39) {
        keyboard.right = true;
    };
    if (e.keyCode == 38) {
        keyboard.up = true;
    };
    if (e.keyCode == 32) {
        keyboard.space = true;
    };
    // if (e.keyCode == 68) {
    //     keyboard.throw = true;
    // };


    // console.log(e);

});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 40) {
        keyboard.down = false;
    };
    if (e.keyCode == 37) {
        keyboard.left = false;
    };
    if (e.keyCode == 39) {
        keyboard.right = false;
    };
    if (e.keyCode == 38) {
        keyboard.up = false;
    };
    if (e.keyCode == 32) {
        keyboard.space = false;
    };
    // if (e.keyCode == 68) {
    //     keyboard.throw = false;
    // };


    // console.log(e);

});