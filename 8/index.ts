const isBirsdayData: boolean = true;
const ageData: number = 40;
const userNameData: string = 'John';

// function logBrtMsg(isBirsday: boolean, userName: string, age: number): string {
//   if (isBirsday) {
//     return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
//   } else {
//     return 'Error';
//   }
// }

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
