# Day 1 - Components & JSX

## What I Learned

- React is a JavaScript library for building UIs.
- React applications are built using reusable Components.
- JSX allows writing HTML-like syntax inside JavaScript.
- Components are JavaScript functions that return JSX.
- `App.jsx` is the root component of a React application.

## Concepts Covered

- React Basics
- JSX
- Functional Components
- Project Structure
- Component Reusability

## Project Structure

```text
src
├── components
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── IssueCard.jsx
│   └── Footer.jsx
└── App.jsx
```
# Day 2 - Props

## What I Learned

- Props are used to pass data from Parent to Child components.
- Props make components reusable.
- Components can display different data using the same UI structure.
- Props can store strings, numbers, booleans, arrays, and objects.
- Destructuring props makes code cleaner.

## Concepts Covered

- Props
- Parent → Child Communication
- Dynamic Components
- Props Destructuring

## Project Update

Issue Cards are now dynamic.

Example:

```jsx
<IssueCard
  title="Login API Bug"
  priority="High"
  status="Open"
/>
```