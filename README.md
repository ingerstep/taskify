# Taskify

Taskify — это веб-приложение для управления задачами и проектами, созданное по аналогии с популярным инструментом Trello. Пользователи могут создавать доски, списки задач и карточки, а также управлять процессом работы с помощью перетаскивания элементов.

## Описание

Приложение состоит из нескольких экранов:

- **Авторизация**: Регистрация и аутентификация через почту, google и github.
- **Основная страница**: Отображает панель управления досками, активность, настройки и платежи.
- **Дэшборд**: Отображает доски задач, можно создавать, передвигать и редактировть.
- **Регистрация организации**: Позволяет создавать аккаунт организации.

### Общие элементы приложения

- **Панель управления**: С левой стороны, содержит статичные пункты.
  - **Дэшборды**: Позволяет создавать новые доски, переходить по ним.
  - **Активность**: Логи всех действий с досками и оплатой.
  - **Настройки аккаунта**: Изменить, удалить организацию, посмотреть количество участников.
  - **Платежи**: Показывает данные по платежам.
- **Дэшборд**: Отображает доски задач, можно создавать, передвигать и редактировть.

## Установить репозиторий

```bash
$ git clone https://github.com/ingerstep/taskify
$ cd taskify
```

## Описание

Чтобы локально запустить проект, нужно подключить БД Postgres и зарегистрироваться в сервисах Clerk, Stripe, Unsplash.

```bash
# Необходимые ключи:
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
CLERK_SECRET_KEY=
STRIPE_API_KEY=
```

## Установка зависимостей

```bash
$ npm install
```

## Инициализация Prisma

```bash
$ npm run postinstall
```

## Запуск приложения

```bash
# development
$ npm run dev
```

## Cборка

```bash
$ npm run build
```

## Зависимости

### Зависимости для работы
- **[@clerk/nextjs](https://www.npmjs.com/package/@clerk/nextjs)**: Интеграция Clerk с Next.js для управления пользователями и аутентификации.
- **[@hello-pangea/dnd](https://www.npmjs.com/package/@hello-pangea/dnd)**: Библиотека для реализации перетаскивания (drag-and-drop) в React, используемая для изменения порядка задач.
- **[@prisma/client](https://www.npmjs.com/package/@prisma/client)**: Клиент Prisma для взаимодействия с базой данных, генерируемый на основе схемы.
- **[@radix-ui/react-accordion](https://www.npmjs.com/package/@radix-ui/react-accordion)**: Компонент Radix UI для создания доступных, настраиваемых аккордеонов.
- **[@radix-ui/react-avatar](https://www.npmjs.com/package/@radix-ui/react-avatar)**: Компонент Radix UI для отображения аватаров (фото профиля пользователя).
- **[@radix-ui/react-dialog](https://www.npmjs.com/package/@radix-ui/react-dialog)**: Доступный компонент диалога (модального окна) от Radix UI.
- **[@radix-ui/react-label](https://www.npmjs.com/package/@radix-ui/react-label)**: Доступный компонент метки для элементов формы от Radix UI.
- **[@radix-ui/react-popover](https://www.npmjs.com/package/@radix-ui/react-popover)**: Настраиваемый компонент поповера от Radix UI.
- **[@radix-ui/react-separator](https://www.npmjs.com/package/@radix-ui/react-separator)**: Компонент Radix UI для визуального разделения содержимого.
- **[@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot)**: Компонент для упрощения композиции сложных пользовательских интерфейсов в Radix UI.
- **[@radix-ui/react-tooltip](https://www.npmjs.com/package/@radix-ui/react-tooltip)**: Компонент подсказки для отображения контекстной информации при наведении или фокусировке.
- **[@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)**: Мощная библиотека для управления состоянием сервера в приложениях на React.
- **[class-variance-authority](https://www.npmjs.com/package/class-variance-authority)**: Утилита для управления условными классами CSS.
- **[clsx](https://www.npmjs.com/package/clsx)**: Утилита для условного объединения имен классов в компонентах React.
- **[date-fns](https://www.npmjs.com/package/date-fns)**: Современная библиотека для работы с датами в JavaScript.
- **[lodash](https://www.npmjs.com/package/lodash)**: Утилита, предлагающая множество функций для работы с массивами, объектами, строками и т.д.
- **[lucide-react](https://www.npmjs.com/package/lucide-react)**: Библиотека иконок для React, предоставляющая настраиваемые SVG-иконки.
- **[next](https://www.npmjs.com/package/next)**: Основной фреймворк для создания приложений на React с серверной отрисовкой, статической генерацией и API-роутами.
- **[react](https://www.npmjs.com/package/react)**: Основная библиотека React для построения пользовательских интерфейсов.
- **[react-dom](https://www.npmjs.com/package/react-dom)**: Предоставляет методы, специфичные для DOM, для управления компонентами React.
- **[sonner](https://www.npmjs.com/package/sonner)**: Библиотека уведомлений для приложений на React.
- **[stripe](https://www.npmjs.com/package/stripe)**: JavaScript SDK Stripe для обработки платежей и подписок.
- **[tailwind-merge](https://www.npmjs.com/package/tailwind-merge)**: Утилита для объединения классов Tailwind CSS без конфликтов.
- **[tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate)**: Плагин Tailwind CSS для добавления анимаций.
- **[unsplash-js](https://www.npmjs.com/package/unsplash-js)**: Клиент API Unsplash для поиска и загрузки изображений.
- **[usehooks-ts](https://www.npmjs.com/package/usehooks-ts)**: Коллекция хуков для React, готовых к использованию с TypeScript.
- **[zod](https://www.npmjs.com/package/zod)**: Библиотека для валидации схем на TypeScript.
- **[zustand](https://www.npmjs.com/package/zustand)**: Маленькая, быстрая и масштабируемая библиотека управления состоянием для приложений на React.

### Зависимости для разработки
- **[@types/lodash](https://www.npmjs.com/package/@types/lodash)**: Определения типов для библиотеки lodash.
- **[@types/node](https://www.npmjs.com/package/@types/node)**: Определения типов для Node.js.
- **[@types/react](https://www.npmjs.com/package/@types/react)**: Определения типов для React.
- **[@types/react-dom](https://www.npmjs.com/package/@types/react-dom)**: Определения типов для React DOM.
- **[eslint](https://www.npmjs.com/package/eslint)**: Инструмент для выявления и исправления проблем в коде на JavaScript и TypeScript.
- **[eslint-config-next](https://www.npmjs.com/package/eslint-config-next)**: Конфигурация ESLint для проектов на Next.js.
- **[postcss](https://www.npmjs.com/package/postcss)**: Инструмент для трансформации CSS с помощью JavaScript-плагинов.
- **[prisma](https://www.npmjs.com/package/prisma)**: ORM (Object-Relational Mapping) инструмент для управления схемой базы данных, миграциями и доступом к данным в приложениях на Node.js.
- **[tailwindcss](https://www.npmjs.com/package/tailwindcss)**: CSS-фреймворк с утилитарным подходом для создания современных адаптивных дизайнов.
- **[typescript](https://www.npmjs.com/package/typescript)**: Надстройка над JavaScript, добавляющая статические типы в язык.

