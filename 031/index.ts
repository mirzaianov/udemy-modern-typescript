const TOP = 'Top';
const RIGHT = 'Right';

enum Direction {
  TOP,
  RIGHT,
  LEFT,
  BOTTOM,
}

const enum TimingFunc {
  EASE = 'ease',
  EASE_IN = 'ease-in',
  LINEAR = 'linear',
}

const enum TimingFuncN {
  EASE = 1,
  EASE_IN = 2,
  LINEAR = EASE * 2,
}

function frame(elem: string, dir: Direction, tFunc: TimingFunc): void {
  if (dir === Direction.RIGHT) {
    console.log(tFunc);
  }
}

frame('id', Direction.RIGHT, TimingFunc.LINEAR);
