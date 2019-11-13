/** @format */

module.exports = {
    parser: '@typescript-eslint/parser', //定义ESLint的解析器
    plugins: ['@typescript-eslint'], //定义了该eslint文件所依赖的插件
    env: {
        //指定代码的运行环境
        browser: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ], //使用推荐的React代码检测规范
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        node: true,
    },
    settings: {
        //自动发现React的版本，从而进行规范react代码
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    parserOptions: {
        //指定ESLint可以解析JSX语法
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'import/no-extraneous-dependencies': ['error', {packageDir: '.'}],
        'no-console': [
            'error',
            {
                allow: ['warn', 'error', 'info'],
            },
        ],
        'consistent-return': 'off',

        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: false,
                    object: false,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],

        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],

        'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],

        'react/prefer-stateless-function': 'off',

        'prettier/prettier': 'off',

        'react/forbid-prop-types': 'off',
        'react/destructuring-assignment': 'off',
    },
}
