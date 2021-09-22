import { useState, useCallback } from 'react';

export function useForm(formObj: {[index: string]:any}) {
  const [form, setForm] = useState(formObj);

  const isInputFieldValid = useCallback(
    (inputField) => {
      for (const rule of inputField.validationRules) {
        if (!rule.validate(inputField.value, form)) {
          inputField.errorMessage = rule.message;
          return false;
        }
      }

      return true;
    },
    [form]
  );

  const isCheckboxFieldValid = useCallback(
    (checkboxField) => {
      if (!!checkboxField.validationRule && !checkboxField.validationRule.validate(checkboxField.checked, form)) {
        checkboxField.errorMessage = checkboxField.validationRule.message;
        return false;
      }

      return true;
    },
    [form]
  );

  const isDropdownValid = useCallback(
    (dropdown) => {
      if(!!dropdown.validationRule && !dropdown.validationRule.validate(dropdown.value, form)) {
        dropdown.errorMessage = dropdown.validationRule.message;
        return false;
      }

      return true;
    },
    [form]
  )

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      const inputObj: { [index: string]:any } = { ...form[name] };
      inputObj.value = value;

      const isValidInput = isInputFieldValid(inputObj);

      if (isValidInput && !inputObj.valid) {
        inputObj.valid = true;
      } else if (!isValidInput && inputObj.valid) {
        inputObj.valid = false;
      }

      inputObj.touched = true;
      setForm({ ...form, [name]: inputObj });
    },
    [form, isInputFieldValid]
  );

  const onCheckboxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = event.target;
      const inputObj: { [index: string]:any } = { ...form[name] };

      inputObj.checked = checked;

      const isValidCheckbox = isCheckboxFieldValid(inputObj);

      if (isValidCheckbox && !inputObj.valid) {
        inputObj.valid = true;
      } else if (!isValidCheckbox && inputObj.valid) {
        inputObj.valid = false;
      }

      inputObj.touched = true;

      setForm({ ...form, [name]: inputObj });
    },
    [form, isCheckboxFieldValid]
  );

  const onDropdownClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const name = event.currentTarget.dataset.name;
      if (!!name) {
        const inputObj: { [index: string]:any } = { ...form[name] };
        const value = (<HTMLButtonElement>event.target).value;

        inputObj.value = value;
        inputObj.touched ++;

        if (inputObj.touched >= 2) {
          const isValidDropdown = isDropdownValid(inputObj);

          if (isValidDropdown && !inputObj.valid) {
            inputObj.valid = true;
          } else if (!isValidDropdown && inputObj.valid) {
            inputObj.valid = false;
          }
        }

        setForm({ ...form, [name]: inputObj });
      }
    },
    [form, isDropdownValid]
  );

  const isFormValid = useCallback(() => {
    let isValid = true;
    const arr = Object.values(form);

    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].valid) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }, [form]);

  function renderFormInputs() {
    return Object.values(form).map((inputObj) => {
      if (inputObj.type && inputObj.type !== 'checkbox' && inputObj.type !== 'dropdown') {
        const { value, label, errorMessage, valid, renderTextInput } = inputObj;
        return renderTextInput(onInputChange, value, valid, errorMessage, label);
      } else if (inputObj.type && inputObj.type === 'checkbox') {
        const { checked, errorMessage, valid, renderCheckbox } = inputObj;
        return renderCheckbox(onCheckboxChange, checked, valid, errorMessage);
      } else if (inputObj.type && inputObj.type === 'dropdown') {
        const { touched, buttonName, value, label, errorMessage, valid, renderDropdown } = inputObj;
        return renderDropdown(onDropdownClick, value, valid, errorMessage, label);
      }
    });
  }

  return { renderFormInputs, isFormValid };
}
