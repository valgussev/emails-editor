import { createEmailsInput } from './EmailsInput';

export default {
  title: 'Example/EmailsInput',
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createEmailsInput({ label, ...args });
};

export const EmailsInput = Template.bind({});
EmailsInput.args = {
  onClick: () => alert('Clicked')
};
