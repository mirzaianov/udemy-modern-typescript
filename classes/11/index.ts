const isBirsdayData: boolean = true;
const ageData: number = 40;
const userNameData: string = 'John';

const createError = (msg: string) => {
  throw new Error(msg);
};

const logBrtMsg = (
  isBirsday: boolean,
  userName: string,
  age: number,
): string => {
  if (isBirsday === true) {
    return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
  } else if (isBirsday === false) {
    return 'Too bad';
  }

  return createError('Error');
};

logBrtMsg(isBirsdayData, userNameData, ageData);
