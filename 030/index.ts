interface User {
  readonly login: string;
  password: string;
  age: number;
  // addr?: string;
  // addr: string | undefined;
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: User = {
  login: 'Ivan',
  password: '123',
  age: 40,
};

const userFreeze: Readonly<User> = {
  login: 'Ivan',
  password: '123',
  age: 40,
};

user.login = 'dfdfdf';

userFreeze.password = 'dfdfdf';

let dbName: string;
sendUserData(user, 'dfdfdfdf');

console.log(dbName!);

function sendUserData(obj: User, db?: string): void {
  dbName = '12345';
  console.log(obj.parents!.father?.toLowerCase(), db?.toLowerCase());
}

class Animal {
  readonly name: string = 'name';
}

const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555];
basicPorts[0] = 5;
basicPorts.push(566);

const basicPorts: readonly [number, ...string[]] = [3000, '3001', '5555'];
basicPorts[0] = 5;
basicPorts.push(566);
