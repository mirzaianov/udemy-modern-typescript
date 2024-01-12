"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach((m) => console.log(m));
    }
    else if (isNumber(msg)) {
        console.log(msg);
    }
    else {
        console.log(msg);
    }
    console.log(msg);
}
printMsg(4);
// function isNumber(n: string[] | number | boolean): n is number {
// 	return typeof n === "number";
// }
function isNumber(n) {
    return typeof n === 'number';
}
function repairVehicle(vehicle) {
    if (isCar(vehicle)) {
        vehicle.wheels;
    }
    else if (isShip(vehicle)) {
        vehicle;
    }
    else {
        vehicle;
    }
}
function isCar(car) {
    return car.wheels.number !== undefined;
}
function isShip(ship) {
    return 'sail' in ship;
}
