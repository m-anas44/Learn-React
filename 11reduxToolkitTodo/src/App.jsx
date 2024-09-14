import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import "./index.css"
function App() {

  return (
    <div className="max-w-lg mx-auto">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
