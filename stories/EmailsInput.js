import './EmailsInput.scss';

const ENTER_KEY_CODE = 13;
const COMMA_KEY_CODE = 188;

// https://stackoverflow.com/a/46181
const isEmailValid = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const removeEmailElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
}

const createEmailElement = ({
  email,
}) => {
  const emailContainer = document.createElement('div');
  const validatedEmailClassName = isEmailValid(email) ? '' : 'emails-input__email--invalid';
  emailContainer.className = ['emails-input__email', validatedEmailClassName].join(' ');

  const emailSpan = document.createElement('span');
  emailSpan.innerText = email;
  emailContainer.append(emailSpan);

  const emailSpanClose = document.createElement('span');
  emailSpanClose.className = 'emails-input__email-close';
  emailSpanClose.addEventListener('click', (event) => {
    event.preventDefault();
    removeEmailElement(emailContainer);
  });

  emailContainer.append(emailSpanClose);
  return emailContainer;
}

export const createEmailsInput = ({
  onClick,
}) => {
  const container = document.createElement('div');
  container.className = 'emails-input';

  const emailsInputTextarea = document.createElement('textarea');
  emailsInputTextarea.className = 'emails-input__textarea'
  emailsInputTextarea.placeholder = 'add more people…';

  emailsInputTextarea.addEventListener('keydown', (event) => {
    if (event.keyCode === ENTER_KEY_CODE || event.keyCode === COMMA_KEY_CODE) {
      event.preventDefault();
      const newEmailElement = createEmailElement({ email: event.target.value });
      container.insertBefore(newEmailElement, emailsInputTextarea);
      emailsInputTextarea.value = '';
    }
  });

  emailsInputTextarea.addEventListener('blur', (event) => {
    const { value: email } = event.target;
    if (email) {
      const newEmailElement = createEmailElement({ email });
      container.insertBefore(newEmailElement, emailsInputTextarea);
      emailsInputTextarea.value = '';
    }
  });

  container.append(emailsInputTextarea);
  container.addEventListener('click', () => {
    emailsInputTextarea.focus();
  });

  return container;
};
