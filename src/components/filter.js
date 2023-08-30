import React from "react";


function Filter({ items, onChange }) {
  const [query, setQuery] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={event => {
          setQuery(event.target.value);
          onChange(filteredItems);
        }}
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}