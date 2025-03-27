<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
=======
# test_bridge_todo_app
realisation d'une todo app

# commentaire
To-Do List
Objectif : Créer une application de gestion de tâches simple, permettant de :
Ajouter une nouvelle tâche
Marquer une tâche comme terminée
Supprimer une tâche
Voir toutes les tâches dans une liste

L'application a :
Front : une partie front pour gerer l'affichage
backend: une partie backend pour gerer les requêtes d'ajout, de modification et de suppression d'une tâches
base de donnée : mongodb
langages : HTML, CSS, JAVASCRIPT(en backend) et Typescript en frontend
framework : React Js, Express Js
packages installés frontend : Lucide-react(pour les icons), react-hot-toast(pour les messages de toast)

# instructions
Pour le tester en local : avoir mongodb compass
Pour le tester en ligne : lien vercel : .......

>>>>>>> 39847c6d25a9e244ce1d2247cd3ec64e216ffb84
