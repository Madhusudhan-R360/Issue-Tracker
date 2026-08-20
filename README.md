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

# Day 3 - State (useState)

## What I Learned

- React State is used to store data that can change over time.
- `useState()` allows React to remember values between renders.
- Updating state using the setter function automatically updates the UI.
- Arrays can be stored in state and rendered dynamically using `.map()`.
- User interactions can update state through event handlers.

## Concepts Covered

- useState
- State Management
- Event Handling (`onClick`)
- Rendering Lists with `.map()`
- Updating Arrays in State

## Project Update

### Before

Issue cards were hardcoded:

```jsx
<IssueCard
  title="Login API Bug"
  priority="High"
  status="Open"
/>

<IssueCard
  title="Payment Gateway Error"
  priority="Medium"
  status="In Progress"
/>
```

### After

Issues are stored in state:

```jsx
const [issues, setIssues] = useState([
  {
    title: "Login API Bug",
    priority: "High",
    status: "Open",
  },
  {
    title: "Payment Gateway Error",
    priority: "Medium",
    status: "In Progress",
  },
]);
```

Rendered dynamically:

```jsx
{
  issues.map((issue) => (
    <IssueCard
      title={issue.title}
      priority={issue.priority}
      status={issue.status}
    />
  ));
}
```

Added an "Add Issue" button:

```jsx
<button onClick={addIssue}>
  Add Issue
</button>
```

## Key Takeaways

- State is the source of truth for UI data.
- Never modify state directly.
- Use the setter function (`setIssues`) to update state.
- `.map()` is commonly used to render lists of components.
- React automatically re-renders when state changes.

## Current Features

✅ Dynamic Issue List

✅ Add Issue Functionality

✅ State Management with `useState`

✅ Dynamic Rendering with `.map()`

## Next Up

**Day 4 - Forms & Event Handling**

- Input Fields
- `onChange`
- Controlled Components
- Create Issue Form
- Add Custom Issues from User Input

### Progress

✅ Day 3 Completed  
📈 Progress: 3/21 Days