function IssueForm({
  title,
  priority,
  setTitle,
  setPriority,
  addIssue,
}) {
  return (
    <div>
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
    </div>
  );
}

export default IssueForm;