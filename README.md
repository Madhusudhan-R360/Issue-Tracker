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
# Day 6 - Search & Filtering

## What I Learned

- React can filter data dynamically using state.
- The `filter()` method is used to search through arrays.
- The `includes()` method helps check matching text.
- User input can instantly update displayed data.

## Concepts Covered

- Search Functionality
- Array filter()
- String includes()
- Real-Time Filtering
- Derived Data

## Project Update

### Features Added

✅ Search Box

✅ Real-Time Search

✅ Filtered Issue List

✅ Dynamic Search Results

## Example

```jsx
const filteredIssues = issues.filter((issue) =>
  issue.title.toLowerCase().includes(
    searchTerm.toLowerCase()
  )
);
```
# Day 7 - Refactoring & Review

## What I Learned

- Large components should be split into smaller reusable components.
- Props can pass both data and functions.
- React applications become easier to maintain when responsibilities are separated.
- Refactoring improves readability without changing functionality.

## Concepts Covered

- Component Refactoring
- Component Composition
- Passing Functions as Props
- React Review

## Project Update

### New Components

✅ SearchBar

✅ IssueForm

### Project Structure

```text
components
├── Header.jsx
├── Sidebar.jsx
├── SearchBar.jsx
├── IssueForm.jsx
├── IssueCard.jsx
└── Footer.jsx
```
# Day 8 - useEffect & Loading State

## What I Learned

- `useEffect()` is used to perform side effects in React.
- Side effects include API calls, timers, local storage operations, and event listeners.
- The dependency array controls when `useEffect()` runs.
- Loading states improve user experience while waiting for data.
- `useEffect()` is commonly used to fetch data from APIs.

## Concepts Covered

- useEffect
- Side Effects
- Dependency Array
- Loading State
- Component Lifecycle Basics

## Project Update

### Features Added

✅ Loading State

✅ First use of `useEffect`

✅ Simulated API Call using `setTimeout`

✅ Conditional Rendering for Loading Screen

## Example

```jsx
useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}, []);
```

### Loading UI

```jsx
{loading ? (
  <h2>Loading...</h2>
) : (
  filteredIssues.map(...)
)}
```

## Key Takeaways

- `useState()` stores data.
- `useEffect()` performs actions.
- The empty dependency array `[]` makes the effect run only once when the component loads.
- Loading states are commonly used before displaying data.
- Most API calls in React are made inside `useEffect()`.

## Current Features

✅ Add Issue

✅ Delete Issue

✅ Search Issues

✅ Loading State

✅ Form Handling

✅ Dynamic Rendering

✅ Reusable Components

