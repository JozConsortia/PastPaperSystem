# React + TypeScript + Vite

## Backend setup

The TypeScript API lives in `backend/` and uses MySQL for users and past-paper
records. MySQL Workbench can run the setup script at `backend/schema.sql`.

1. Copy `.env.example` to `backend/.env` and set the MySQL values.
2. Run `backend/schema.sql` in MySQL Workbench.
3. Start the API with `npm run server:dev`.
4. Start the frontend with `npm run dev`.

After registering the first account, promote it to an administrator in MySQL:

```sql
UPDATE users SET role = 'admin' WHERE email = 'admin@example.com';
```

If the database was created before roles were added, run this migration first:

```sql
ALTER TABLE users ADD COLUMN role ENUM('student', 'admin') NOT NULL DEFAULT 'student';
ALTER TABLE users ADD COLUMN account_type VARCHAR(40) NOT NULL DEFAULT 'Student';
```

If `past_papers` already exists, add memorandum support as well:

```sql
ALTER TABLE past_papers ADD COLUMN memo_url VARCHAR(500) NULL;
ALTER TABLE past_papers ADD COLUMN memorandum_available BOOLEAN NOT NULL DEFAULT FALSE;
```

Sign out and sign in again after changing the role so the new role is included
in the session token. Administrators can then use `/admin` to upload papers.

The frontend application lives in `frontend/`, with its React source in
`frontend/src/` and static files in `frontend/public/`.

You can also work inside each application folder:

- `cd frontend && npm install && npm run dev`
- `cd backend && npm install && npm run dev`

The homework assistant calls `POST /api/homework-assistance`. Add
`OPENAI_API_KEY` to `.env` for real AI responses; without it, the safe local
tutor fallback remains available.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./frontend/tsconfig.node.json', './frontend/tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./frontend/tsconfig.node.json', './frontend/tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
