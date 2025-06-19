"use strict";
const spider = document.querySelector(".spider");
const wall = document.querySelector(".wall");
wall.addEventListener("click", (e)=>{
    const wallCoordinates = wall.getBoundingClientRect();
    if (e.clientX >= wallCoordinates.left && e.clientX <= wallCoordinates.right && e.clientY >= wallCoordinates.top && e.clientY <= wallCoordinates.bottom) {
        let x = e.offsetX - spider.offsetWidth / 2;
        let y = e.offsetY - spider.offsetHeight / 2;
        x = Math.max(0, Math.min(x, wall.clientWidth - spider.offsetWidth));
        y = Math.max(0, Math.min(y, wall.clientHeight - spider.offsetHeight));
        spider.style.top = y + "px";
        spider.style.left = x + "px";
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
