## Table of Contents

- [Table of Contents](#table-of-contents)
- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Mock API](#mock-api)
- [Data Storage](#data-storage)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Acknowledgments](#acknowledgments)

## Project Overview
This project is a responsive dashboard application built using React, TypeScript, and SCSS. It includes several pages such as Login, Dashboard, User Page, and User Details Page, each designed to interact with a mock API and local storage for user data management.

## Features
- **Login Page**: Allows users to authenticate.
- **Dashboard**: Displays summary data and statistics.
- **User Page**: Lists users with interactive features.
- **User Details Page**: Shows detailed information for each user with local storage persistence.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
```bash
   git clone https://github.com/Vicolas11/lendsqr-fe-test.git
   cd lendsqr-fe-test
```
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
4. Open http://localhost:5173 to view it in the browser.

## Tech Stack
- React: Frontend library for building user interfaces.
- TypeScript: Typed superset of JavaScript for improved developer productivity.
- SCSS: CSS preprocessor for styling components.
- Tailwind CSS: A utility-first CSS framework that provides low-level utility classes to build custom designs without writing traditional CSS.
- Jest: JavaScript testing framework.

## Mock API
The application fetches data for the user pages from a mock API containing 500 dummy records. However, handling large datasets efficiently is crucial for performance. In real-time applications, datasets often exceed tens of thousands of records, making it impractical to fetch them all at once. 

To address this issue, I created a [server](https://github.com/Vicolas11/lendsqr-mockyapi-be) using Express.js. This server fetches data directly from [Mocky.io](https://run.mocky.io/v3/ad281a0d-05ad-4e4f-a527-26603b13e6a8) and returns it in smaller chunks based on the `pageSize` query parameter. By paginating the data (typically 9 items per page), we improve server performance and reduce the load on the client side.

The server is hosted on [render](https://api-lendsqrmocky.onrender.com/data?page=1&pageSize=9), ensuring reliable access and scalability for handling large datasets without compromising performance. This approach enhances the application's responsiveness and usability, aligning with best practices for managing extensive data in web applications.

## Data Storage
User details on the Dashboard and User Details Page are stored using the Redux Persist module, which utilizes local storage for data persistence. This data is accessed and managed through the Redux state management module, ensuring that user information remains available across components. This approach guarantees seamless user experience and data continuity, aligning with best practices in state management for web applications.

## Folder Structure
The project structure is organized as follows:
```php
lendsqr-fe-test/
├── public/             # favicon.svg file
├── src/                # Source files
│   ├── assets/         # Static assets (fonts, icons, images)
│   ├── components/     # Reusable UI components and styling
│   ├── config/         # Constant Config from .env
│   ├── data/           # Dashboard local data
│   ├── hooks/          # React custom hooks
│   ├── interfaces/     # Typescript interface
│   ├── layout/         # Dashboard layout
│   ├── pages/          # Application pages (Login, Dashboard, User, UserDetail)
│   ├── router/         # ReactDOM Router
│   ├── store/          # Redux State Management
│   ├── styles/         # Root SCSS stylesheets
│   ├── tests/          # Test Component Pages
│   └── utils/          # Utility functions
└── main.tsx            # Root Project file
└── README.md           # Project overview and instructions
```

## Deployment
The build output in the **dist** folder was deployed using [Vercel](https://victor-akoh-lendsqr-fe-test.vercel.app/):

```bash
npm run build
```

## Acknowledgments
- Inspired by [Mocky.io](http://mocky.io/)
- Inspired by [Vercel](https://vercel.com/)
- Inspired by [Render](https://render.com/)