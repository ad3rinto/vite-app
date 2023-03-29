function ListGroup() {
  const items = [
    "New York",
    "Paris",
    "San Francisco",
    "Copenhagen",
    "Ebutte Meta",
    "Stockport",
    "Epetedo",
  ];
  return (
    <div className="container">
      <h1>Lists Of Cities</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
