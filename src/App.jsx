import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Destination from "./pages/Destination/Destination";
import Header from './components/Header/Header'
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/space-tourism" element={<Home />} />
          <Route path="/space-tourism/destination" element={<Destination />} />
          <Route path="/space-tourism/crew" element={<Crew />} />
          <Route path="/space-tourism/technology" element={<Technology />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;