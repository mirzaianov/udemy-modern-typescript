interface IForm {
  login: string;
  password: string;
}

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

interface IFieldValue {
  isValid: boolean;
  errorMsg?: string;
}

interface IValidationData {
  [key: string]: IFieldValue;
}

const validationData: IValidationData = {
  login: { isValid: false, errorMsg: 'At least 3 characters' },
  password: { isValid: true },
};
