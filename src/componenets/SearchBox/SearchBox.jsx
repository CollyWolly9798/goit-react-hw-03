export default function SearchBox({ value, onValue }) {
  return <input type='text' value={value} onChange={evt => onValue(evt.target.value)} />;
}
