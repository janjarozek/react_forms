import "./App.css";

import FunctionForm from "./components/FunctionForm";
import ClassForm from "./components/ClassForm";
import PersonForm from "./components/PersonForm";
import ReactHookForm from "./components/ReactHookForm";

function App() {
  return (
    <div className="App">
      <FunctionForm />
      <ClassForm />
      <PersonForm />
      <ReactHookForm />
    </div>
  );
}

export default App;
