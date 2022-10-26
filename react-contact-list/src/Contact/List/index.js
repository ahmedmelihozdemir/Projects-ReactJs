import React from "react";
import { useState } from "react";

function List({ contact }) {
  const [filterText, setFilter] = useState("");
  const filtered = contact.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });

  return (
    <div className="List">
      <hr />
      <h1>List</h1>
      <br />
      <input
        placeholder="Filter"
        value={filterText}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <br />
      <ul>
        {filtered.map((item) => (
          <li key={item.fullName}>
            <span>{item.fullName}</span>
            <span>{item.phone} </span>
          </li>
        ))}
      </ul>
      <p>
        Total Contact: {filtered.length} / {contact.length}
      </p>
    </div>
  );
}

export default List;
