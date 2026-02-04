# Recipe Web App (SPM)

A modern Recipe Management Application built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. This project allows users to manage their favorite recipes with a simple and intuitive interface.

## 🚀 Features

- **Browse Recipes**: View a list of all saved recipes.
- **Create Recipe**: Add new recipes with title, ingredients, and instructions.
- **Edit Recipe**: Update existing recipes.
- **Delete Recipe**: Remove recipes you no longer need.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State/Data**: Server Actions & In-memory mock data (simulating a database)

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router pages
│   ├── actions.ts        # Server Actions for CRUD operations
│   ├── globals.css       # Global styles (Tailwind directives)
│   ├── layout.tsx        # Root layout configuration
│   ├── page.tsx          # Landing page
│   └── recipes/          # Recipe feature routes
│       ├── page.tsx      # Recipe list view
│       ├── create/       # Create recipe page
│       └── [id]/edit/    # Edit recipe page
├── components/           # Reusable UI components
│   └── RecipeForm.tsx    # Shared form for creating/editing recipes
├── lib/                  # Utilities and data simulation
│   ├── data.ts           # Mock data and helper functions
│   └── types.ts          # TypeScript interfaces
├── public/               # Static assets
└── README.md             # Project documentation
```

## 🚦 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abaddona74-glitch/recipe-webapp-spm.git
   cd recipe-webapp-spm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🔄 Workflow & Branching Strategy

This project follows a structured Git workflow:

- **`main`**: The production-ready code.
- **`dev`**: The integration branch where features are merged.
- **`feature/*`**: Separate branches for each new feature or task.

**Development Process:**
1. Create a `feature` branch from `dev`.
2. Implement changes and commit.
3. Open a Pull Request (PR) to merge into `dev`.
4. Run CI checks (Build & Lint).
5. Merge to `dev`.
6. Periodically merge `dev` to `main` for release.

## 📸 Screenshots

Here is a glimpse of the application's interface:

| Recipe List | Recipe Details |
|:---:|:---:|
| ![Recipe List](public/screenshots/Screenshot%202026-02-04%20130852.png) | ![Recipe Details](public/screenshots/Screenshot%202026-02-04%20130931.png) |

| Create/Edit Form | Mobile/Responsive |
|:---:|:---:|
| ![Create Form](public/screenshots/Screenshot%202026-02-04%20131009.png) | ![Mobile View](public/screenshots/Screenshot%202026-02-04%20131107.png) |

| Additional Views | |
|:---:|:---:|
| ![View 1](public/screenshots/Screenshot%202026-02-04%20131126.png) | ![View 2](public/screenshots/Screenshot%202026-02-04%20131144.png) |

## 📝 License

This project is licensed under the ISC License.
