# EmailsEditor

## Description
EmailsEditor is an input component which is responsible for adding, validating and removing emails from the input.
It also provides `getEmailsCount` and `addEmail` handy methods to control the input.

Form is a component which is responsible for adding random emails and printing an amount of valid emails.

## Demo
Demo can be found [here](https://valgussev.github.io/emails-editor/)

## How to use
1. Add the EmailsInput library as a script from `dist/index.js`
```HTML
<script src="emails-input.js"></script>
```
1. Add a container element
```HTML
<div id="emails-input"></div>
```
3. Initialize the component
```javascript
var inputContainerNode = document.querySelector('#emails-input');
var emailsInput = new EmailsInput();
inputContainerNode.append(emailsInput.getContainer());
```

## Development getting started
1. Install packages by running `yarn`
1. Render a storybook by running `yarn storybook`
1. Building a package by running `yarn build`

## Storybook
Storybook is an open source tool for developing UI components in isolation.
With Storybook it is easily possible to showcase different standalone component usages.
Storybook comes with the following components:
1. Form - rendering of a `Form` component
1. EmailsEditor - rendering of a `EmailsEditor` component
1. MultiForm - rendering several `Form` components on a page
1. MultiEmailsEditor - rendering several `EmailsEditor` components on a page

## Publishing
In order to publish to Github Pages run `yarn deploy-storybook`