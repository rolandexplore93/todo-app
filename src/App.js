import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
