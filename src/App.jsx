import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import IssueCard from "./components/IssueCard";
import Footer from "./components/Footer";

function App() {
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

  const addIssue = () => {
  const newIssue = {
    title: "MongoDB Timeout",
    priority: "Low",
    status: "Open",
  };

  setIssues([...issues, newIssue]);
};

  return (
    <div>
      <Header />

      <Sidebar />

    <button onClick={addIssue}>
  Add Issue
</button>

      {issues.map((issue) => (
        <IssueCard
          title={issue.title}
          priority={issue.priority}
          status={issue.status}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
