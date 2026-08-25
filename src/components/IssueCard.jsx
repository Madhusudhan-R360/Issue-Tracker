function IssueCard({ title, priority, status, onDelete }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Priority: {priority}</p>
      <p>Status: {status}</p>

      <button onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default IssueCard;