# 💰 Personal Finance Tracker

A fully functional personal finance tracking application built with React and TypeScript.
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
- TypeScript
- React Router v6
- Context API
- CSS (custom properties)

## React & TypeScript Concepts Demonstrated

- `useState` — local component state
- `useEffect` — data fetching on mount
- `useReducer` — complex form state management
- `useContext` — global state without prop drilling
- Custom `useFetch` hook — reusable data fetching with loading and error states
- `useParams` + `useNavigate` — dynamic routing
- Controlled forms + validation
- Union types — `"Income" | "Expenses"`
- Type narrowing — TypeScript infers types from logic
- Typed hooks — `useReducer`, `useContext`, `useParams`
- Typed events — `React.FormEvent<HTMLFormElement>`

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
├── types/
│   └── index.ts
├── context/
│   └── TransactionContext.tsx
├── hooks/
│   └── useFetch.ts
├── components/
│   ├── Navbar.tsx
│   ├── Dashboard.tsx
│   ├── TransactionList.tsx
│   ├── TransactionDetail.tsx
│   └── AddTransaction.tsx
└── App.tsx
```