import validator from 'validator';
import './style.css';

const validateBtn = document.querySelector('.validate-btn');
validateBtn.addEventListener('click', () => {
  const input = document.querySelector('#input').value;
  const inputType = document.querySelector('#input-type').value;
  const feedbackField = document.querySelector('#feedback');
  let validation = false;
  switch (inputType) {
    case 'email': validation = validator.isEmail(input);
      break;
    case 'cpf':
      validation = validator.isTaxID(input, 'pt-BR');
      break;
    case 'strong-password':
      validation = validator.isStrongPassword(input);
      break;
    case 'cep':
      validation = validator.isPostalCode(input, 'BR');
      break;
    case 'passport':
      validation = validator.isPassportNumber(input, 'BR');
      break;
    case 'phone-number':
      validation = validator.isMobilePhone(input, 'pt-BR');
      break;
    default:
      break;
  }
  feedbackField.innerHTML = `A validação retornou <i>${validation}</i>.`;
});
