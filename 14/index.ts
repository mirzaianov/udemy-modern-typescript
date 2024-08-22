const userData = {
  isBirsdayData: true,
  ageData: 40,
  userNameData: 'John',
  messages: {
    error: 'Error',
  },
};

const createError = (msg: string) => {
  throw new Error(msg);
};

const logBrtMsg = ({
  isBirsdayData,
  userNameData,
  ageData,
  messages: { error },
}: {
  isBirsdayData: boolean;
  userNameData: string;
  ageData: number;
  messages: { error: string };
}): string => {
  if (isBirsdayData) {
    return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
  } else {
    return createError(error);
  }
};

console.log(logBrtMsg(userData));
