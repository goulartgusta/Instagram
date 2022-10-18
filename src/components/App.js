import '../styles/App.scss';
import Menu from './Menu';
import Navegacao from "./Navegacao";
import Cards from "./Cards";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Navegacao />
      <main>
        <div className="container">
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
