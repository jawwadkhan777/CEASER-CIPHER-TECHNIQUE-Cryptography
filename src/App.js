import "./App.css";
import Footer from "./components/Footer";
import Input from "./components/Input";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <Input />
      </div>
      <Footer />
    </>
  );
}

export default App;
