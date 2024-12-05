# E-Plant Shopping

E-Plant Shopping is a React-based web application for browsing and purchasing plants online, developed using Vite, Tailwind CSS, and Redux for state management.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [License](#license)

## Technologies
- **React**: Frontend library
- **Redux**: State management
- **Vite**: Build tool and development server
- **Tailwind CSS**: Styling and responsive design
- **Redux Toolkit**: Simplified Redux state management

## Installation

To get started with the project:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/e-plantShopping.git
   cd e-plantShopping
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Usage

### Development
- Run development server: `npm run dev`

### Production Build
- Build for production: `npm run build`
- Preview production build: `npm run preview`

### GitHub Pages Deployment
- Deploy to GitHub Pages: `npm run deploy`

## Features
- Browse plants categorized by properties
- Add plants to shopping cart
- Manage cart items using Redux state management
- Responsive design with Tailwind CSS
- Global state management with Redux Toolkit

## Project Structure
```
src/
│
├── App.jsx               # Main application component
├── ProductList.jsx       # Product list component
├── CartItem.jsx          # Cart item component
├── CartSlice.jsx         # Redux cart state management slice
├── store.js              # Redux store configuration
├── AboutUs.jsx           # About Us page component
├── App.css               # Main CSS file
├── index.css             # Global CSS styles
└── main.jsx              # React application entry point

public/                   # Static assets
│
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
├── postcss.config.js     # PostCSS configuration
├── eslint.config.js      # ESLint configuration
└── index.html            # HTML template
```

## Redux State Management
The application uses Redux Toolkit for efficient and simplified state management:
- `CartSlice.jsx` manages the shopping cart state
- Centralized store configuration in `store.js`
- Easy state updates and tracking of cart items

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
