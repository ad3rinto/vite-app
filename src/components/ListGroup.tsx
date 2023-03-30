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

  const text = <p>No Items FOund</p>;
  return (
    <div className="container">
      <h1>Lists Of Cities</h1>
      {items.length === 0 && text}
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
