module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    parser: '@babel/eslint-parser',
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended'
    ],
    rules: {
        'react/react-in-jsx-scope': 0
    }
};
