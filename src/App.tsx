import './App.css';
import AdvancedProps from './components/AdvancedProps';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
function App() {
  /*const personName = {
    first: 'Bruce',
    last: 'wayne',
  };

  const nameList =[
    {
      first:'Bruce',
      last:'Wayne'
    },
    {
      first:'Clark',
      last:'Kent'
    },
    {
      first:'Princess',
      last:'Diana'
    }
  
]*/
  return (
    <div className="App">
      {/* <Greet name="raf" messageCount={5} isLoggedIn={false}></Greet>
      <Person name={personName}></Person>
      <PersonList names={nameList}></PersonList>*/}
      <AdvancedProps></AdvancedProps>
    </div>
  );
}

export default App;
