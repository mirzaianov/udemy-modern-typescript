"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let msg = "Hello";
msg = "Hello";
const port3000 = 3000;
const port3001 = 3001;
function startServer(protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log(`Server started on ${protocol}://server:${port}`);
    }
    else {
        console.error("Invalid port");
    }
    return "Server started";
}
startServer("https", 3001);
function createAnimation(id, animName, timingFunc = "ease", duration, iterCount) {
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    // if (elem) {
    console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
    // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
    // }
}
createAnimation("id", "fade", "ease-in", 5, "infinite");
