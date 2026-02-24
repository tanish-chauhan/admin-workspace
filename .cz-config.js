module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    { value: 'refactor', name: 'refactor: Code refactoring' },
    { value: 'test', name: 'test:     Adding tests' },
    { value: 'chore', name: 'chore:    Maintenance tasks' },
  ],

  messages: {
    type: 'Select commit type:',
    subject: 'Write a short description:',
    scope: 'Enter scope (button, layout, theme, etc):',
    confirmCommit: 'Confirm commit?',
  },

  allowCustomScopes: true,
  skipQuestions: ['body', 'footer', 'breaking'],
};
