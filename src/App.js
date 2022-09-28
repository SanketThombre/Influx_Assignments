// import logo from './logo.svg';
import './App.css';
import {Header} from "./Components/Header"
import { Dashboard } from './Components/Dashboard';
import { ChatBox } from './Components/ChatBox';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <ChatBox/>
    </div>
  );
}

export default App;
