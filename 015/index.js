"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const departments = ['dev', 'design', 'marketing'];
const department = departments[0];
// departments.push(5);
const report = departments
    .filter((d) => d !== 'dev')
    .map((d) => `${d} - done`);
const nums = [
    [3, 5, 6],
    [7, 8, 9],
];
const [first] = report;
console.log(first);
