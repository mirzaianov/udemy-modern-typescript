"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    login: 'Ivan',
    password: '123',
    age: 40,
    addr: 'Moscow',
};
const dbName = '12345';
function sendUserData(obj, db) {
    console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase());
}
