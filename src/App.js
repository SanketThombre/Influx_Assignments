import logo from './logo.svg';
import './App.css';
import {Header} from "./Components/Header"
import { Dashboard } from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard/>
    </div>
  );
}

export default App;
