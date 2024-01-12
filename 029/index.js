"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    login: 'Ivan',
    password: '123',
    age: 40,
    addr: 'Moscow',
};
let dbName;
sendUserData(user, 'dfdfdfdf');
console.log(dbName);
function sendUserData(obj, db) {
    dbName = '12345';
    console.log(obj.parents.father?.toLowerCase(), db?.toLowerCase());
}
