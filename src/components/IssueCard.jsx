function IssueCard({ title, priority, status }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Priority: {priority}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default IssueCard;