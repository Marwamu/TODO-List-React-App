import "./App.css";
import TodoWrapper from "./components/TodoWrapper.js";
import bgImage from './assets/bg-app.jpg';

function App() {
  return (
    <div className="App">
       <div className="bg-app" style={{ backgroundImage: `url(${bgImage})`}}>
        <TodoWrapper />
      </div>
      
    </div>
  );
}

export default App;
