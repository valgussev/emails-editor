import { EmailsInput } from './EmailsInput';
import { createForm } from './Form';

export default {
  title: 'Example/EmailsInput',
};

const EmailsEditorTemplate = ({ ...args }) => {
  const emailsInput = new EmailsInput({ ...args });
  return emailsInput.getContainer();
};

const MultiEmailsEditorTemplate = ({ ...args }) => {
  const emailsInput1 = new EmailsInput({ ...args });
  const emailsInput2 = new EmailsInput({ ...args });
  const emailsInput3 = new EmailsInput({ ...args });

  const container = document.createElement('div');
  container.append(emailsInput1.getContainer());
  container.append(emailsInput2.getContainer());
  container.append(emailsInput3.getContainer());

  return container;
};

const FormTemplate = ({ ...args }) => {
  return createForm({ ...args });
};

const MultiFormTemplate = ({ ...args }) => {
  const container = document.createElement('div');
  const form1 = createForm({ ...args });
  const form2 = createForm({ ...args });
  const form3 = createForm({ ...args });
  container.append(form1);
  container.append(form2);
  container.append(form3);

  return container;
};

export const Form = FormTemplate.bind({});
Form.args = {};

export const EmailsEditor = EmailsEditorTemplate.bind({});
EmailsEditor.args = {};

export const MultiEmailsEditor = MultiEmailsEditorTemplate.bind({});
MultiEmailsEditor.args = {};

export const MultiForm = MultiFormTemplate.bind({});
MultiForm.args = {};

