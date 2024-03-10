import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside'
import './App.css';

function App (props) {
  return (
    <div className="App">
      <Aside />
      <div className="main">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
