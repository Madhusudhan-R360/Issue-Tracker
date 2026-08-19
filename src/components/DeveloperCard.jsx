function DeveloperCard({ name, role, experience }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Role: {role}</p>
      <p>Experience: {experience}</p>
    </div>
  );
}

export default DeveloperCard;