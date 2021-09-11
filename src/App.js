import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Curriculum from "./components/Curriculum";

function App() {
  return (
    <div className="App">
      <div className="fields">
        <GeneralInfo />
      </div>
      <div className="curriculum">
        <Curriculum />
      </div>
    </div>
  );
}

export default App;
