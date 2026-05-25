# 💰 Personal Finance Tracker

A fully functional personal finance tracking application built with React. 
Track your income and expenses, view your real-time balance, and manage 
transactions across a multi-page interface.

## Features

- 📊 Live dashboard with total balance, income and expenses
- 📋 Full transaction list with color coded amounts
- 🔍 Clickable detail page for each transaction
- ➕ Add new transactions with full form validation
- 💵 Nigerian Naira (₦) currency formatting
- 🌿 Professional dark finance green theme
- 📱 Responsive layout

## Tech Stack

- React 18
- React Router v6
- Context API
- CSS (custom properties)

## React Concepts Demonstrated

- `useState` — local component state
- `useEffect` — data fetching on mount
- `useReducer` — complex form state management
- `useContext` — global state without prop drilling
- Custom `useFetch` hook — reusable data fetching
- `useParams` + `useNavigate` — dynamic routing
- Controlled forms + validation

## Getting Started

```bash
git clone https://github.com/yourusername/finance-tracker.git
cd finance-tracker
npm install
npm run dev
```

## Project Structure

```
src/
├── context/
│   └── TransactionContext.ts
├── hooks/
│   └── useFetch.ts
├── types/
│   └── index.ts
├── components/
│   ├── Navbar.jsx
│   ├── Dashboard.jsx
│   ├── TransactionList.jsx
│   ├── TransactionDetail.jsx
│   └── AddTransaction.jsx
└── App.tsx
```