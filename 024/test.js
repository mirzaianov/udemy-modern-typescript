"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverConfig = {
    protocol: 'https',
    port: 3001,
};
const backupConfig = {
    protocol: 'http',
    port: 3000,
};
const startServer = (config) => {
    console.log(`Server started on ${config.protocol}://server:${config.port}`);
    return 'Server started';
};
startServer(serverConfig);
startServer(backupConfig);
