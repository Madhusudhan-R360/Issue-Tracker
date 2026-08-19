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