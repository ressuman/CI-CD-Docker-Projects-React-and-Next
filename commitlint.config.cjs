// module.exports = {
//   // extends: ['@commitlint/config-conventional'],
//   extends: [],
//   rules: {
//     'header-min-length': [2, 'always', 20],
//     'header-case-start-capital': [2, 'always'],
//     'header-end-period': [2, 'always'],
//   },
//   plugins: [
//     {
//       rules: {
//         'header-case-start-capital': ({ raw }) => {
//           return [
//             /^[A-Z]/.test(raw),
//             'Commit message must start with a capital letter',
//           ];
//         },
//         'header-end-period': ({ header }) => {
//           return [/\.$/.test(header), 'Commit message must end with a period'];
//         },
//       },
//     },
//   ],
// };

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation only
        'style', // Formatting, missing semi-colons, etc
        'refactor', // Code change without feature/fix
        'perf', // Performance improvement
        'test', // Adding or fixing tests
        'build', // Build system or dependencies
        'ci', // CI config
        'chore', // Maintenance
        'revert', // Reverts a commit
      ],
    ],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'sentence-case'],
    'subject-full-stop': [2, 'always', '.'], // Enforce period at the end
    'header-min-length': [2, 'always', 20],
    'header-max-length': [2, 'always', 200],
    // 'type-empty': [2, 'never'],
    // 'subject-empty': [2, 'never'],
    // // 'subject-full-stop': [2, 'never', '.'],
    // 'header-max-length': [2, 'always', 72],
    // 'header-min-length': [2, 'always', 20],
    // 'subject-case': [2, 'always', 'sentence-case'],
    // 'header-case-start-capital': [2, 'always'], // use plugin below
    // 'header-end-period': [2, 'always'], // use plugin below
  },
  plugins: [
    {
      rules: {
        'header-case-start-capital': ({ raw }) => {
          const pass = /^[A-Z]/.test(raw);
          return [pass, '❌ Commit message must start with a capital letter.'];
        },
        'header-end-period': ({ header }) => {
          const pass = /\.$/.test(header);
          return [pass, '❌ Commit message must end with a period.'];
        },
      },
    },
  ],
};

// commitlint.config.cjs
// module.exports = {
//   extends: ['@commitlint/config-conventional'],
//   rules: {
//     'type-enum': [
//       2,
//       'always',
//       [
//         'feat', // New feature
//         'fix', // Bug fix
//         'docs', // Documentation only
//         'style', // Formatting, missing semi-colons, etc
//         'refactor', // Code change without feature/fix
//         'perf', // Performance improvement
//         'test', // Adding or fixing tests
//         'build', // Build system or dependencies
//         'ci', // CI config
//         'chore', // Maintenance
//         'revert', // Reverts a commit
//       ],
//     ],
//     'subject-empty': [2, 'never'],
//     'subject-full-stop': [2, 'never', '.'],
//     'header-max-length': [2, 'always', 72],
//     'header-min-length': [2, 'always', 20],
//     'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
//     'header-case-start-capital': ({ raw }) => [
//       /^[A-Z]/.test(raw),
//       'Commit message must start with a capital letter',
//     ],
//   },
// };

// ✅ Summary
// This config ensures:

// 🔤 Commit starts with a capital letter

// 🚫 No period at the end

// ✍️ Subject isn’t too short or long

// 🧠 Enforces conventional types

// 🧼 Forces lowercase subject message

// 📏 Keeps your Git history clean and automated-tool-ready
