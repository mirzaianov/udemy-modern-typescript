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

const dbName = '12345';

function sendUserData(obj: User, db?: string): void {
  console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase());
}
