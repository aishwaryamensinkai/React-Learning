import React from 'react';
import './App.css';
import { Person,Country} from './Person';

function App() {
  return (
    <div className="App">
    TypeScript | React Type Safety
        <Person
        name="Pedro"
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["jessica", "jake", "jerry", "jasmine"]}
        country={ Country.India}
        />
      </div>
  );
}

export default App;
