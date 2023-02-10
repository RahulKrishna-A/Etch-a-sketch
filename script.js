let len =8;
let c=0;
const picker = document.querySelector("#input");
const grid = document.querySelector("#sketchbar");
const eraser = document.querySelector(".eraser");
const grid8 = document.querySelector(".grid8");
const grid16 = document.querySelector(".grid16");
const grid32 = document.querySelector(".grid32");
const grid64 = document.querySelector(".grid64");
const clear = document.querySelector(".gridclear");
const random = document.querySelector(".random");

grid8.addEventListener("click",()=>{setgrid(8)});
grid16.addEventListener("click",()=>{setgrid(16)});
grid32.addEventListener("click",()=>{setgrid(32)});
grid64.addEventListener("click",()=>{setgrid(64)});
eraser.addEventListener("click",()=>{color="rgb(0,191,255)"});
clear.addEventListener("click",()=>{setgrid(len)});
random.addEventListener("click",()=>{
    randomcolor();
    c=1;
});

function randomcolor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    color=`rgb(${r},${g},${b})`;

}


let color="#000000";

function setgrid(length){
    len=length;
    grid.style.gridTemplateRows=`repeat(${length},auto)`;
    grid.style.gridTemplateColumns=`repeat(${length},auto)`;
    grid.innerHTML=``;
    for(i=0;i<length*length;i++){
        let gridel = document.createElement(`div`);
        gridel.classList.add(`gridelements`);
        gridel.addEventListener(`mouseover`,changecolour);
        gridel.addEventListener("mouseout", changecolour);
        grid.appendChild(gridel);
    }
}
setgrid(8);
function changecolour(e){
    e.target.style.backgroundColor=color;
}
function choosecolor(e){
    c=1
    color=e.target.value;
}

picker.addEventListener("change",choosecolor);
picker.addEventListener("input",choosecolor);
