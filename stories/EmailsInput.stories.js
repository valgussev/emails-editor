import { EmailsInput } from './EmailsInput';
import { createForm } from './Form';

export default {
  title: 'Example/EmailsInput',
};

const EmailsEditorTemplate = ({ ...args }) => {
  const emailsInput = new EmailsInput({ ...args });
  return emailsInput.getContainer();
};

const FormTemplate = ({ ...args }) => {
  return createForm({ ...args });
};

export const EmailsEditor = EmailsEditorTemplate.bind({});
EmailsEditor.args = {};

export const Form = FormTemplate.bind({});
Form.args = {};
