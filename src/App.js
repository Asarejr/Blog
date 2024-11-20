
import Navbar from './Navbar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() { 

  return (
    <div className="App">
      <Navbar />
      <div className="content">
          <Home  />
        </div>        
    </div>
  );
}

export default App;
