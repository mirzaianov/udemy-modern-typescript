"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userDataTuple = [
    true,
    40,
    'John',
    'Alex',
    'Ann',
];
userDataTuple[0] = 'true';
const res = userDataTuple.map((t) => `${t} - data`);
const [isBirsday, age, userName] = userDataTuple;
