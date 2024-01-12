"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    login: 'Ivan',
    password: '123',
    age: 40,
};
const userFreeze = {
    login: 'Ivan',
    password: '123',
    age: 40,
};
user.login = 'dfdfdf';
userFreeze.password = 'dfdfdf';
let dbName;
sendUserData(user, 'dfdfdfdf');
console.log(dbName);
function sendUserData(obj, db) {
    dbName = '12345';
    console.log(obj.parents.father?.toLowerCase(), db?.toLowerCase());
}
class Animal {
    name = 'name';
}
const basicPorts = [3000, 3001, 5555];
basicPorts[0] = 5;
basicPorts.push(566);
const basicPorts = [3000, '3001', '5555'];
basicPorts[0] = 5;
basicPorts.push(566);
