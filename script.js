const body = document.querySelector("body");
const left = document.querySelector(".left-hand-side");
const right = document.querySelector(".right-hand-side");

body.addEventListener('mousemove', () => {
    left.addEventListener('mouseenter', (event) => {
        left.style.flex=3;   
    });
    left.addEventListener('mouseleave', () => {
        left.style.flex = 1;
    });
    
    right.addEventListener('mouseenter', () => {
        right.style.flex = 3;
    });
    right.addEventListener('mouseleave', () => {
        right.style.flex = 1;
    });
});

