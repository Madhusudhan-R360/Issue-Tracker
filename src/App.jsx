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

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const addIssue = () => {
    const newIssue = {
      title: title,
      priority: priority,
      status: "Open",
    };

    setIssues([...issues, newIssue]);

    setTitle("");
    setPriority("");
  };
  const deleteIssue = (indexToDelete) => {
  const updatedIssues = issues.filter(
    (_, index) => index !== indexToDelete
  );

  setIssues(updatedIssues);
};
  return (
    <div>
      <Header />

      <Sidebar />

      <input
        type="text"
        placeholder="Issue Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      />

      <button onClick={addIssue}>
        Add Issue
      </button>
  {issues.length === 0 ? (
  <h2>No Issues Found</h2>
) : (
  issues.map((issue, index) => (
    <IssueCard
      key={index}
      title={issue.title}
      priority={issue.priority}
      status={issue.status}
      onDelete={() => deleteIssue(index)}
    />
  ))
)}

      <Footer />
    </div>
  );
}

export default App;