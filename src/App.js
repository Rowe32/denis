import "./App.css";
import { Nav } from "./nav";
import { Main } from "./views";
import NavProvider from "./context/NavContext";

function App() {
  return (
    <div className="appContainer">
      <NavProvider>
        <Nav />
        <Main />
      </NavProvider>
    </div>
  );
}

export default App;
