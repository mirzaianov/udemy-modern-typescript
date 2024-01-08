var TOP = 'Top';
var RIGHT = 'Right';
var Direction;
(function (Direction) {
    Direction[Direction["TOP"] = 0] = "TOP";
    Direction[Direction["RIGHT"] = 1] = "RIGHT";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["BOTTOM"] = 3] = "BOTTOM";
})(Direction || (Direction = {}));
function frame(elem, dir, tFunc) {
    if (dir === Direction.RIGHT) {
        console.log(tFunc);
    }
}
frame('id', Direction.RIGHT, "linear" /* TimingFunc.LINEAR */);
