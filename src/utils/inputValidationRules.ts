function createValidationRule(ruleName: string, errorMessage: string, validateFunc: CallableFunction) {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validateFunc
  };
}

const errorMessageDefault = 'Введено некорректное значение';

export function requiredRule(inputName: string) {
  return createValidationRule(
    'required',
    `Поле "${inputName}" обязательно для заполнения`,
    (inputValue: string, formObj: object) => inputValue.length !== 0
  );
}

export function namePatternRule() {
  return createValidationRule(
    'namePattern',
    errorMessageDefault,
    (inputValue: string, formObj: object) => {
      const patternNameEngRu = /(^([A-Z])[a-z]+((\s|\-)([A-Z])[a-z]+){0,3}$)|(^([А-Я])[а-я]+((\s|\-)([А-Я])[а-я]+){0,3}$)/;
      patternNameEngRu.lastIndex = 0;
      return patternNameEngRu.test(inputValue);
    }
  )
}

export function emailPetternRule() {
  return createValidationRule(
    'emailPattern',
    errorMessageDefault,
    (inputValue: string, formObj: object) => {
      const patternEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
      patternEmail.lastIndex = 0;
      return patternEmail.test(inputValue);
    }
  )
}

export function telPetternRule() {
  return createValidationRule(
    'telPattern',
    errorMessageDefault,
    (inputValue: string, formObj: object) => {
      const patternTel = /^(\+)?(\d{1,4})?(\-)?(\()?(\d{1,3})?(\))?(\-)?\d{1,4}(\-)?\d{1,4}(\-)?\d{1,9}$/;
      patternTel.lastIndex = 0;
      return patternTel.test(inputValue);
    }
  )
}
