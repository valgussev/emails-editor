import { EmailsInput } from './EmailsInput';

export default {
  title: 'Example/EmailsInput',
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

const Template = ({ ...args }) => {
  const emailsInput = new EmailsInput({ ...args });
  emailsInput.addEmail();
  return emailsInput.getContainer();
};

export const EmailsEditor = Template.bind({});
EmailsEditor.args = {
  onClick: () => alert('Clicked')
};
