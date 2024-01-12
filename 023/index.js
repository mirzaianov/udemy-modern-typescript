"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let msg = 'Hello';
msg = 'Hello';
const serverConfig = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
};
const backupConfig = {
    protocol: 'http',
    port: 3000,
    role: 'sysadmin',
};
const startServer = (protocol, port) => {
    console.log(`Server started on ${protocol}://server:${port}`);
    return 'Server started';
};
startServer(serverConfig.protocol, serverConfig.port);
function createAnimation(id, animName, timingFunc, duration, iterCount) {
    console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
}
createAnimation('id', 'fade', 'ease-in', 5, 'infinite');
