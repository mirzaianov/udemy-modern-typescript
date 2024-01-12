"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverConfig = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
    log: (msg) => console.log(msg),
};
const startServer = (protocol, port, log) => {
    console.log(`Server started on ${protocol}://server:${port}`);
    return 'Server started';
};
startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);
const styles = {
    position: 'fixed',
    top: '20px',
    left: '50px',
};
