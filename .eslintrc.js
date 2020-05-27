module.exports = {
    env: {
        es6: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        __DEV__: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            //DA UM AVISO QUANDO UMA EXTENSAO QUE NAO E JSX OU JS ESTA UTILIZANDO O JSX
            'warn',
            {
                extensions: ['.jsx', '.js'],
            },
        ],
        'import/prefer-default-export': 'off', //GARANTE QUE O ARQUIVO VAI PERMITIR EXPORT QUE NAO E SOMENTE EXPORT DEFAULT
    },
};