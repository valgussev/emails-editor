import './EmailsInput.scss';

const ENTER_KEY_CODE = 13;
const COMMA_KEY_CODE = 188;

export class EmailsInput {
  constructor() {
    this.emailsCount = 0;

    this.emailInput = this._createInputElement();
    this.container = this._createContainer(this.emailInput);
  }

  getContainer = () => {
    return this.container;
  }

  getEmailsCount = () => {
    return this.emailsCount;
  }

  addEmail = () => {
    const email = this._generateEmail();
    const newEmailElement = this._createEmailElement({ email });
    this.container.insertBefore(newEmailElement, this.emailInput);
    this.emailInput.focus();
  }

  _createContainer(emailInput) {
    const container = document.createElement('div');
    container.className = 'emails-input';
    container.append(emailInput);
    container.addEventListener('click', () => {
      emailInput.focus();
    });
    return container;
  }

  _createInputElement() {
    const emailInput = document.createElement('textarea');
    emailInput.className = 'emails-input__textarea'
    emailInput.placeholder = 'add more people…';

    emailInput.addEventListener('keydown', (event) => {
      if (event.keyCode === ENTER_KEY_CODE || event.keyCode === COMMA_KEY_CODE) {
        event.stopPropagation();
        event.preventDefault();
        const newEmailElement = this._createEmailElement({ email: event.target.value });
        this.container.insertBefore(newEmailElement, emailInput);
        emailInput.value = '';
      }
    });

    emailInput.addEventListener('blur', (event) => {
      const { value: email } = event.target;
      if (email) {
        const newEmailElement = this._createEmailElement({ email });
        this.container.insertBefore(newEmailElement, emailInput);
        emailInput.value = '';
      }
    });

    emailInput.addEventListener('paste', (event) => {
      event.stopPropagation();
      event.preventDefault();

      const clipboardData = event.clipboardData || window.clipboardData;
      const pastedData = clipboardData.getData('Text');

      if (pastedData) {
        pastedData.split(',').forEach(email => {
          const newEmailElement = this._createEmailElement({ email });
          this.container.insertBefore(newEmailElement, emailInput);
        });
      }
    });
    return emailInput;
  }

  _createEmailElement({
    email,
  }) {
    const sanitizedEmail = this._sanitizeEmail(email);
    const isEmailValid = this._getIsEmailValid(sanitizedEmail);

    const emailContainer = document.createElement('div');
    const validatedEmailClassName = isEmailValid ? '' : 'emails-input__email--invalid';
    emailContainer.className = ['emails-input__email', validatedEmailClassName].join(' ');

    const emailSpan = document.createElement('span');
    emailSpan.innerText = sanitizedEmail;
    emailContainer.append(emailSpan);

    const emailSpanClose = document.createElement('span');
    emailSpanClose.className = 'emails-input__email-close';
    emailSpanClose.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();
      this._removeElement(emailContainer);
      if (isEmailValid) {
        this.emailsCount -= 1;
      }
    });

    if (isEmailValid) {
      this.emailsCount += 1;
    }
    emailContainer.append(emailSpanClose);
    return emailContainer;
  }

  _removeElement(element) {
    return element && element.parentNode && element.parentNode.removeChild(element);
  }

  // https://stackoverflow.com/a/46181
  _getIsEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  _sanitizeEmail(email) {
    return email.trim();
  }

  _generateEmail() {
    return Math.random().toString(36).substring(2, 11) + '@' + Math.random().toString(36).substring(2, 8) + '.com';
  }
}
