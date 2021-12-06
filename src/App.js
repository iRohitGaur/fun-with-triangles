import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import IsTriangle from "./Components/IsTriangle";
import Quiz from "./Components/Quiz";
import Hypotenuse from "./Components/Hypotenuse";
import Area from "./Components/Area";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/hypotenuse" element={<Hypotenuse />} />
          <Route path="/area" element={<Area />} />
          <Route path="/" element={<IsTriangle />} />
        </Routes>
        <div className="footer">
          Made by <a href="https://rohit.xyz">Rohit Gaur</a> with{" "}
          <i className="fab fa-react"></i> and <i className="fa fa-heart"></i>
        </div>
      </div>
    </Router>
  );
}

export default App;
