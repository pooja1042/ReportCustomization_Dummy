import { Route, Routes } from "react-router-dom";
import { Nav } from "./Components/Nav";
import { Home } from "./Components/Home";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
