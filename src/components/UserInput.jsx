export function UserInput({ label, id, onChange, val }) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} required onChange={(e) => onChange(id, e.target.value)}  value={val}/>
    </p>
  );
}
