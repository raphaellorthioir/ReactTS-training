import './App.css';
import Greet from './components/Greet'
import Person from './components/Person';
function App() {
const personName = {
  first:'Bruce',
  last:'wayne'
}

  return <div className="App">
<Greet name= 'raf' messageCount={5} isLoggedIn={false}></Greet>
<Person name={personName}></Person>
  </div>;
}

export default App;
