import logo from './logo.svg';
import './App.css';

import AddToCart from './components/AddToCart';
import ViewCart from './components/ViewCart';

function App() {

  return (
    <div className="App">
      <AddToCart />
      <ViewCart />
    </div>
  );
}

export default App;
