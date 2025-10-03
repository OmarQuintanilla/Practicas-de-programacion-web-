function Cientifico({ nombre, profesion, premios, descubrimiento, imagen }) {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <img src={imagen} alt={nombre} />
      <p><strong>Profesión:</strong> {profesion}</p>
      <p><strong>Premios:</strong> {premios.length + " (" + premios.join(", ") + ")"}</p>
      <p><strong>Descubrió:</strong> {descubrimiento}</p>
    </div>
  );
}

export default Cientifico;
