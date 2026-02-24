module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    { value: 'style', name: 'style:    Code style changes' },
    { value: 'refactor', name: 'refactor: A code change that neither fixes a bug nor adds a feature' },
    { value: 'test', name: 'test:     Adding or updating tests' },
    { value: 'chore', name: 'chore:    Maintenance tasks' }
  ],

  messages: {
    type: "Select the type of change:",
    subject: "Write a short description:",
    scope: "Enter scope (optional, e.g., button, layout, theme):",
    body: "Provide a longer description (optional):",
    breaking: "List breaking changes (optional):",
    footer: "Issues closed (optional):",
    confirmCommit: "Are you sure you want to proceed with the commit?"
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'footer'],
};