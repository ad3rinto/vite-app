import { useState } from "react";

function ListGroup() {
  const items = [
    "New York",
    "Paris",
    "San Francisco",
    "Copenhagen",
    "Ebutte Meta",
    "Stockport",
    "Epetedo",
    "Ogbomoso",
    "Ejigbo",
  ];
  // let selectedIndex = -1;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="container">
      <h1>Lists Of Cities</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "active list-group-item"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
