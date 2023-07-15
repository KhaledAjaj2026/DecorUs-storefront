import "./App.css";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <h2 className="font-label">Suade Reading Chair</h2>
        <p className="font-description">
          Grab your favorite book and a warm cup of coffee as you lounge on this
          wonderful option of a reading chair.
        </p>
        <p className="font-price">129.99</p>
      </div>
    </>
  );
}

export default App;
