import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { HomeProvider } from "./ComponentesGlobales/Contextos/HomeContext";

import AnimatedRoutes from "./Rutas/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <HomeProvider>
        <Router>
          <AnimatedRoutes />
        </Router>
      </HomeProvider>
    </div>
  );
}

export default App;
