# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# react-tic-tac-toe

## Setup & Run

Quick steps to get this project running locally on macOS (zsh) or any POSIX shell.

Prerequisites:

- Node 16.8+ (recommended). Use nvm or your preferred Node version manager if needed.
- npm (bundled with Node) or yarn.

Install dependencies:

```bash
npm install
# or: yarn
```

Start the dev server with Vite (Hot Module Replacement enabled):

```bash
npm run dev
```

Open the app in your browser at the URL shown in the terminal (usually http://localhost:5173).

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

Troubleshooting:

- If the dev server starts on a different port, check the terminal output for the exact URL.
- If you see permission or incompatible Node errors, try switching Node versions via nvm.
- If dependencies fail to install, remove `node_modules` and reinstall (`rm -rf node_modules package-lock.json && npm install`).

## Reflection

tic-tac-toe is a simple game that we all learn as kids. 
Sometimes we take for granted how easy it is for us to just know who one at a glance,
but for a computer this is not so simple.
The computer must keep track of everyones moves, where the Xs and Os are so they can't be written over, 
and must check all the possible win condtions to see if there is a winner.
React has simplified some of this with components breaking up the code to make it easier to read and know what the code is doing,
it combines HTML and JavaScript making it unneccessary to have to get the ids from the html just to replace the html to update the game,
react also makes it hard to lose or mess up data