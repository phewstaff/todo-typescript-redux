import "./App.css";
import AddToList from "./components/AddToList";
import Todo from "./components/Todos";

function App() {
  return (
    <div className="todo-app">
      <AddToList />
      <Todo />
    </div>
  );
}

export default App;
