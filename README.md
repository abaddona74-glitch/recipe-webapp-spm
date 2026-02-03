# Recipe Web App (SPM)

Recipe management application built with Next.js.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

## Folder Structure

- `app/`: App Router pages and layouts
- `components/`: Reusable UI components
- `lib/`: Utility functions and configuration
- `public/`: Static assets

## Branching Strategy

We follow a `feature` -> `dev` -> `main` workflow:

- **main**: Production-ready code.
- **dev**: Integration branch for development.
- **feature/**: Feature branches created from `dev`.

### Workflow
1. Create a branch from `dev`: `git checkout -b feature/my-feature dev`
2. Implement feature.
3. Open a Pull Request to `dev`.
4. Merge to `dev` after review.
5. Create a Pull Request from `dev` to `main` for release.