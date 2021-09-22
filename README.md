# Task

[Figma design](https://www.figma.com/file/Lz2p2uwl96ck03V4qkJL0w/Untitled?node-id=0%3A1

1. Сверстать компонент формы с использованием React JS (без использования ui библиотек).
2. Форма должна быть “резиновой”.  Минимальная ширина экрана 360px
3. Настроить валидацию:
    * кнопка отправки формы выключена,  пока не будут корректно заполнены все поля. - поле “Имя” не может содержать цифры и символы кроме пробела и дефиса
    * в поле “email” можно отправить только email
    * в поле “номер телефона” можно ввести только 11 цифр, круглые скобки, дефис и знак плюс

------
------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Storybook

Starts Storybook in development mode:

```bash
npm run storybook
# or
yarn storybook
```

## Checks

Linter launch:

```bash
npm run lint
# or
yarn lint
```

Running a TypeScript check:

```bash
npm run typecheck
# or
yarn typecheck
```
