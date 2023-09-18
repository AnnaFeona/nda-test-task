'use-strict';

const form = document.getElementById('main-form');
const submitBtn = document.querySelector('.main-form__submit');
submitBtn.disabled = true;

const resultContainer = document.querySelector('.form-value__container');

const getFields = (form) => form.querySelectorAll('input');

const getFormValue = (form) => {
  const fields = getFields(form);
  const result = {};
  fields.forEach((field) => {
    result[field.name] = field.value;
  });

  return result;
};

const isFormValid = (form) => {
  const fields = getFields(form);
  let result = true;

  fields.forEach((field) => {
    if (!field.validity.valid) {
      result = false;
    }
  });

  return result;
}

const showResult = (parent, value) => {
  parent.innerHTML = '';
  for (let key in value) {
    const line = document.createElement('div');
    line.classList.add('result-line');
    parent.append(line);
    line.textContent = `${key}: ${value[key]}`;
    const divider = document.createElement('span');
    divider.classList.add('result__divider');
    parent.append(divider);
  }
}

form.addEventListener('input', () => {
  submitBtn.disabled = !isFormValid(form);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  showResult(resultContainer, getFormValue(form));
});
