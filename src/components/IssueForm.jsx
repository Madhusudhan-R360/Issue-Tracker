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

      <p>
        Characters: {title.length}
      </p>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="">
          Select Priority
        </option>

        <option value="Low">
          Low
        </option>

        <option value="Medium">
          Medium
        </option>

        <option value="High">
          High
        </option>

        <option value="Critical">
          Critical
        </option>
      </select>

      <button
        onClick={addIssue}
        disabled={!title.trim() || !priority}
      >
        Add Issue
      </button>
    </div>
  );
}

export default IssueForm;