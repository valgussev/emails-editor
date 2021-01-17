import './EmailsInput.scss';

// https://stackoverflow.com/a/46181
const isEmailValid = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
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
  emailContainer.append(emailSpanClose);
  return emailContainer;
}

export const createEmailsInput = ({
  onClick,
}) => {
  const emailsInputContainer = document.createElement('div');
  emailsInputContainer.className = 'emails-input';

  const emailContainer = createEmailElement({ email: 'john@miro.com' });
  emailsInputContainer.append(emailContainer);

  const emailContainerInvalid = createEmailElement({ email: 'invalid-email' });
  emailsInputContainer.append(emailContainerInvalid);

  const emailsInputTextarea = document.createElement('textarea');
  emailsInputTextarea.className = 'emails-input__textarea'
  emailsInputTextarea.placeholder = 'add more people…';

  emailsInputContainer.append(emailsInputTextarea);
  emailsInputContainer.addEventListener('click', () => {
    emailsInputTextarea.focus();
  });

  return emailsInputContainer;
};
