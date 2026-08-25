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

# Day 4 - Forms & Event Handling

## What I Learned

- React handles form inputs using state.
- `onChange` is used to capture user input.
- Controlled Components use React state as the source of truth.
- Form data can be used to create new UI elements dynamically.
- State can be reset after form submission.

## Concepts Covered

- Forms
- Input Fields
- onChange
- Controlled Components
- Form State
- Event Handling

## Project Update

Added issue creation form.

### Features Added

✅ Issue Title Input

✅ Priority Input

✅ Add Issue Button

✅ Dynamic Issue Creation

✅ Auto-Clear Inputs After Submission

## Key Takeaways

- Input fields should be connected to state.
- `onChange` updates state whenever input changes.
- Form data can be used to create new objects.
- React state drives the UI.

## Current Features

✅ Dynamic Issue List

✅ Add Custom Issues

✅ Form Handling

✅ State Management

✅ Event Handling

# Day 5 - Conditional Rendering

## What I Learned

- React can render different UI based on conditions.
- Ternary operators are commonly used for conditional rendering.
- Logical AND (`&&`) can be used to show components conditionally.
- UI should react to changes in application state.

## Concepts Covered

- Conditional Rendering
- Ternary Operator
- Logical AND (`&&`)
- Dynamic UI Updates

## Project Update

### Features Added

✅ Delete Issue

✅ Empty State Handling

✅ "No Issues Found" Message

✅ Dynamic UI Based on State

## Example

```jsx
{
  issues.length === 0 ? (
    <h2>No Issues Found</h2>
  ) : (
    issues.map(...)
  );
}
```