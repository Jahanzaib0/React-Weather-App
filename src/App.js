import Weather from './component/Weather';
import Nav from './component/Nav'
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("karachi")
  console.log(search)
  return (
    <div className="App">
      <Nav SearchFunc = {search => setSearch(search)}/>

     <Weather city={search}/>
    </div>
  );
}

export default App;
