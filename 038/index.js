"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isCar(car) {
    return "wheels" in car;
}
function isShip(ship) {
    return "sail" in ship;
}
function repairVehicle(vehicle) {
    switch (vehicle.name) {
        case "car":
            console.log(vehicle.wheels);
            break;
        case "ship":
            console.log(vehicle.sail);
            break;
        case "airplane":
            console.log(vehicle.wings);
            break;
        case "smth":
            console.log(vehicle.wings);
            break;
        default:
            const smth = vehicle;
            console.log("Ouuuups!");
    }
}
