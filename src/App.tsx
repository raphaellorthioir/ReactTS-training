import './App.css';
import AdvancedProps from './components/AdvancedProps';
import Main from './components/Event-Props/Main';

import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Container from './components/style_props/Container';
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
      <PersonList names={nameList}></PersonList>
  <AdvancedProps></AdvancedProps> 
  */}
      <Main></Main>
      {/*  <Container
        styles={{ border: '1px solid black', padding: '1rem' }}
      ></Container>*/}
    </div>
  );
}

export default App;
