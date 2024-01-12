"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverIConfig = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
    date: new Date(),
};
const startIServer = (protocol, port) => {
    console.log(`Server started on ${protocol}://server:${port}`);
    return 'Server started';
};
startIServer(serverIConfig.protocol, serverIConfig.port);
