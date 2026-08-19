
# 🚀 React Learning Journey

## Day 1 - Components & JSX

### Goal

Understand the fundamental building blocks of React:

- What React is
- What JSX is
- What Components are
- How React applications are structured
- Build a static Issue Tracker UI

---

# 📚 Topics Learned

## 1. What is React?

React is a JavaScript library used to build User Interfaces (UI).

Traditional websites are usually built using large HTML pages. React breaks the UI into smaller reusable pieces called Components.

### Example

Instead of creating:

- Navbar
- Sidebar
- Card
- Footer

multiple times, React allows us to create reusable components and use them whenever needed.

---

## 2. What is JSX?

JSX stands for JavaScript XML.

It allows us to write HTML-like syntax inside JavaScript.

### Example

```jsx
function App() {
  return <h1>Hello World</h1>;
}
```


React converts JSX into JavaScript behind the scenes.

Using Variables in JSX
function App() {
  const name = "Madhu";

  return <h1>Hello {name}</h1>;
}


Output:

Hello Madhu

JSX Rules
Rule 1: Return a Single Parent Element

❌ Incorrect

return (
  <h1>Hello</h1>
  <p>World</p>
);


✅ Correct

return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);

Rule 2: Use className Instead of class

❌ Incorrect

<div class="card">


✅ Correct

<div className="card">

3. What are Components?

Components are reusable pieces of UI.

A component is simply a JavaScript function that returns JSX.

Example
function Header() {
  return <h1>Issue Tracker</h1>;
}

export default Header;

Reusing Components
<IssueCard />
<IssueCard />
<IssueCard />


One component can be reused multiple times.

4. Project Structure
src
│
├── components
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── IssueCard.jsx
│   └── Footer.jsx
│
├── App.jsx
└── main.jsx

Purpose of Each File
File	Purposemain.jsx	Entry point of React application
App.jsx	Root component
Header.jsx	Top navigation section
Sidebar.jsx	Left navigation menu
IssueCard.jsx	Displays issue information
Footer.jsx	Footer section
5. Understanding App.jsx

App.jsx acts as the root component.

All other components are imported and used inside it.

Example
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import IssueCard from "./components/IssueCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <Sidebar />

      <IssueCard />
      <IssueCard />
      <IssueCard />

      <Footer />
    </div>
  );
}

export default App;

Component Tree
App
│
├── Header
├── Sidebar
├── IssueCard
├── IssueCard
├── IssueCard
└── Footer

🛠 Project Built Today
Issue Tracker UI (Static Version)
Components Created
Header
Sidebar
IssueCard
Footer
Current Features

✅ React project setup using Vite

✅ JSX usage

✅ Component creation

✅ Component reuse

✅ Application structure understanding

🎯 Key Learnings
React is component-based.
Components are JavaScript functions.
Components return JSX.
JSX allows HTML-like syntax inside JavaScript.
Components improve code reusability.
App.jsx is the root component.
Components can be nested inside one another.
🧠 Interview Questions
Q1. What is React?

React is a JavaScript library for building reusable and interactive user interfaces.

Q2. What is JSX?

JSX is a syntax extension that allows writing HTML-like code inside JavaScript.

Q3. What are Components?

Components are reusable building blocks of a React application.

Q4. Why do we use Components?
Reusability
Better organization
Easier maintenance
Improved scalability
Q5. What is App.jsx?

App.jsx is the root component that contains and renders other components.

Q6. Are Components Functions?

Yes.

Example:

function Header() {
  return <h1>Header</h1>;
}

✅ Practice Tasks Completed
 Setup React using Vite
 Create components folder
 Create Header component
 Create Sidebar component
 Create IssueCard component
 Create Footer component
 Import components into App.jsx
 Render three Issue Cards
🚀 Mini Challenge

Build the following layout without referring to notes:

------------------------------------------------
Issue Tracker
------------------------------------------------

Dashboard
Issues
Reports
Settings

------------------------------------------------
Issue 1
Issue 2
Issue 3
------------------------------------------------

Footer
------------------------------------------------


Create separate components for each section.

📝 Personal Notes
What went well?
Difficult concepts?
Questions for revision?
📅 Next Day
Day 2 - Props

Topics:

Parent → Child Communication
Passing Data Between Components
Dynamic Components
Reusable Issue Cards
Rendering Different Issue Information
Expected Outcome

Instead of:

<IssueCard />
<IssueCard />
<IssueCard />


We'll be able to write:

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

<IssueCard
  title="Database Connection Issue"
  priority="Critical"
  status="Open"
/>


and display different data using the same component.

Status: ✅ Day 1 Completed

Progress: 1 / 21 Days
Project: Full Stack Issue Tracker (Jira Lite)