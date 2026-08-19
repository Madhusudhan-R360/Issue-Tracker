import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import IssueCard from "./components/IssueCard";
import Footer from "./components/Footer";
import DeveloperCard from "./components/DeveloperCard";
function App() {
  return (
    <div>
      <Header />

      <Sidebar />

     <DeveloperCard
  name="Madhu"
  role="Backend Intern"
  experience={1}
/>

     <IssueCard
  title="Login API Bug"
  priority="High"
  status="Open"
/>

<IssueCard
  title="Payment Failure"
  priority="Medium"
  status="In Progress"
/>

<IssueCard
  title="Redis Cache Miss"
  priority="Low"
  status="Resolved"
/>

<IssueCard
  title="MongoDB Timeout"
  priority="Critical"
  status="Open"
/>

<IssueCard
  title="JWT Validation Error"
  priority="High"
  status="Testing"
/>
      <Footer />
    </div>
  );
}

export default App;