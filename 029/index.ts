interface User {
  login: string;
  password: string;
  age: number;
  // addr?: string;
  addr: string | undefined;
  parents?: {
    mother?: string;
    father?: string;
  };
}

const user: User = {
  login: 'Ivan',
  password: '123',
  age: 40,
  addr: 'Moscow',
};

let dbName: string;
sendUserData(user, 'dfdfdfdf');

console.log(dbName!);

function sendUserData(obj: User, db?: string): void {
  dbName = '12345';
  console.log(obj.parents!.father?.toLowerCase(), db?.toLowerCase());
}
