import './Form.scss';
import { EmailsInput } from './EmailsInput';

export const createForm = () => {
  const form = document.createElement('div');
  form.className = 'form';

  const panel = document.createElement('div');
  panel.className = 'form__panel';

  const title = document.createElement('h1');
  title.className = 'form__title';

  const titleBold = document.createElement('strong');
  titleBold.innerText = 'Board name';

  title.appendChild(document.createTextNode('Share '));
  title.appendChild(titleBold);
  title.appendChild(document.createTextNode(' with others'));

  panel.append(title);

  const emailsInput = new EmailsInput();
  panel.append(emailsInput.getContainer());
  form.append(panel);

  const footer = document.createElement('div');
  footer.className = 'form__footer';

  const addEmailButton = document.createElement('button');
  addEmailButton.className = 'form__button'
  addEmailButton.innerText = 'Add email';
  addEmailButton.addEventListener('click', () => {
    emailsInput.addEmail();
  });
  footer.append(addEmailButton);

  const getCountButton = document.createElement('button');
  getCountButton.className = 'form__button'
  getCountButton.innerText = 'Get emails count';
  getCountButton.addEventListener('click', () => {
    const emailCount = emailsInput.getEmailsCount();
    alert(emailCount);
  });
  footer.append(getCountButton);

  form.append(footer);

  return form;
}