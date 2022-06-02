function Toolbar ({filters, selected, onSelectFilter}) {
  const select = e => {
    onSelectFilter(e.target.innerText);
  };

  return (
    <div className="filters">
      {filters.map(filter => <div key={filter} className={filter === selected ? 'active' : ''} onClick={select}>{filter}</div>)}
    </div>
  );
}

export default Toolbar;