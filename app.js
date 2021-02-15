let x=0
let y=0

const pacman = document.getElementById("pac")
pacman.style.position="absolute";
pacman.style.left='50%';
pacman.style.top='50%';



function moveUp() {
    y++
    pacman.style.top=parseInt(pacman.style.top)-2 +'%';
}

function moveDown() {
    y--
    pacman.style.top=parseInt(pacman.style.top)+2 +'%';
}

function moveRight() {
    x++
    pacman.style.left=parseInt(pacman.style.left)+2 +'%';
}
 
function moveLeft() {
    x--
    pacman.style.left=parseInt(pacman.style.left)-2 +'%';
}


document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowUp"){
        console.log(`Key "${e.key}" pressed`);
        moveUp();
    }else if (e.key === "ArrowDown"){
        console.log(`Key "${e.key}" pressed`);
        moveDown();
    }else if (e.key === "ArrowLeft"){
        console.log(`Key "${e.key}" pressed`);
        moveLeft()
    }else if (e.key === "ArrowRight"){
        console.log(`Key "${e.key}" pressed`);
        moveRight()}
});