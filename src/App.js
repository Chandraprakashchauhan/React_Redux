import logo from './logo.svg';
import './App.css';

import Inc_decrement from './components/Inc_decrement';
import AddToCart from './components/AddToCart';
import ViewCart from './components/ViewCart';

function App() {

  return (
    <div className="App">
      {/* <Inc_decrement /> */}
      <AddToCart />
      <ViewCart />
    </div>
  );
}

export default App;
