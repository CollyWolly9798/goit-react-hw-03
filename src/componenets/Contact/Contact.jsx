export default function Contact({ info, deleteContact }) {
  return (
    <div>
      <ul>
        <li>{info.name}</li>
        <li>{info.number}</li>
      </ul>
      <button onClick={() => deleteContact(info.id)}>Delete</button>
    </div>
  );
}
