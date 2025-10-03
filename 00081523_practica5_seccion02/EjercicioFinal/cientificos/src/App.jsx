import Cientifico from "./components/Cientifico";

function App() {
  const cientificos = [
    {
      nombre: "Maria Skłodowska-Curie",
      profesion: "Física y química",
      premios: [
        "Premio Nobel de Física",
        "Premio Nobel de Química",
        "Medalla Davy",
        "Medalla Matteucci",
      ],
      descubrimiento: "Polonio (elemento químico)",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg"
    },
    {
      nombre: "Katsuko Saruhashi",
      profesion: "Geoquímica",
      premios: [
        "Premio Miyake de geoquímica",
        "Premio Tanaka"
      ],
      descubrimiento: "Un método para medir el dióxido de carbono en el agua de mar",
      imagen: "https://upload.wikimedia.org/wikipedia/en/0/08/Katsuko_Saruhashi.jpg"
    }
  ];

  return (
    <div>
      <h2>Científicos Notables</h2>
      {cientificos.map((c, i) => (
        <Cientifico key={i} {...c} />
      ))}
    </div>
  );
}

export default App;
