import "./App.css";
import { UserRegistration } from "./components/UserRegisteration";
import { BrowserRouter } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
