import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import IssueCard from "./components/IssueCard";
import Footer from "./components/Footer";
import IssueForm from "./components/IssueForm";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";

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

  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();

      setPosts(data.slice(0, 5));

      setLoading(false);
    } catch (err) {
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  fetchPosts();
}, []);

  const addIssue = () => {
    const newIssue = {
      title,
      priority,
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

  const filteredIssues = issues.filter((issue) =>
    issue.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />

      <Sidebar />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <IssueForm
        title={title}
        priority={priority}
        setTitle={setTitle}
        setPriority={setPriority}
        addIssue={addIssue}
      />

      {loading ? (
        <h2>Loading...</h2>
      ) : filteredIssues.length === 0 ? (
        <h2>No Issues Found</h2>
      ) : (
        filteredIssues.map((issue, index) => (
          <IssueCard
            key={index}
            title={issue.title}
            priority={issue.priority}
            status={issue.status}
            onDelete={() => deleteIssue(index)}
          />
        ))
      )}
  <h2>API Posts</h2>

{error && <p>{error}</p>}

{posts.map((post) => (
  <div key={post.id}>
    <h4>{post.title}</h4>
  </div>
))}
      <Footer />
    </div>
  );
}

export default App;