let salary;
salary = 5000;

const userData = '{"isBirsdayData": true, "ageData": 40, userNameData: "John"}';

const userObj: {
  isBirsdayData: boolean;
  ageData: number;
  userNameData: string;
} = JSON.parse(userData);

console.log(userObj.smt());

const logBrtMsg = (
  isBirsday: boolean,
  userName: string,
  age: number,
): string => {
  if (isBirsday) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else {
    return 'Error';
  }
};

logBrtMsg(isBirsdayData, userNameData, ageData);
