# Создаем проект с помощью vite

    npm create vite@latest

> Там выбираем -> react-ts\
> И называем проект (react-ts-app)

    cd react-ts-app
    code .

Далее устанавливаем все зависимости
(package.json)

    npm i

Запускаем

    npm run dev

Удаляем `App.css`\
Удаляем из `public` -> `vite.svg`
Изменяем app.tsx

    function App() {
        return (
            <div>
                Hello world
            </div>
        )
    }

    export default App;

## Установка eslint

    npm i -D eslint
    npx eslint --init

> to check sysntax and find problems\
> javaScript modules (import/export)\
> react\
> use TypeScript\
> code run -> browser\
> format config -> JavaScript\
> install them now -> yes\
> Package manager -> npm

## Настройка eslint от airbnb

    npx install-peerdeps --dev esling-config-airbnb

Далее в своем файле eslintrc.cjs пишем

    extends: [
        ...
        'airbnb',
        'airbnb/hooks',
        ...
    ],

Далее >

> F1 -> EsLint fix all auto fixable problems

    npm i -D eslint-config-airbnb-typescript

Наш файл eslint.cjs дополняем:

    extends: [
        ...
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        ...
    ],

И вот эту часть тоже

    parserOptions: {
        ...
        project: '.tsconfig.json'
        ...
    }

> f1 -> windows reload

Далее заходим в tsconfig.json
Так как мы имеем ошибку указывающую на modules

    "includes": [
        ".eslintrc.cjs",
        "src",
    ]

> f1 -> windows reload

> Проверить активирован Eslint в расширениях и установлен ли он.

Заходим в .eslintrc.cjs

Находим там rules
добавляем туда строчку

    rules: {
        'react/react-in-jsx-scope': 0,
    }

## Далее настраиваем pretier

    npm i -D prettier eslint-config-prettier eslint-plugin-prettier

создаем в корне .prettierrc.cjs
c таким содержанием его можно на сайте посмотреть prettier

    // prettier.config.js or .prettierrc.js
    module.exports = {
        trailingComma: "es5",
        tabWidth: 2,
        semi: true,
        singleQuote: true,
    };

Добавляем в .eslintrc.cjs
-> 'plugin:react/recommended'

    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],

> F1 -> EsLint fix all auto fixable problems\
> f1 -> windows reload
