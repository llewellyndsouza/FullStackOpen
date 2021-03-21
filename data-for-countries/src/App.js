import Result from './components/Result';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("")

  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log(response.data);
      setCountries(response.data);
    })
  }

  useEffect(hook,[]);

  return(
    <div>
      <form>
      find countries: <input value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      </form>
      <Result countries={countries} search={search}/>
    </div>
  )
}

export default App;
