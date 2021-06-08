
import './App.css';
import UserList from './Components/UserList';
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);
  const [error,setError] = useState(null);
  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          console.log("response",response)
          setData(response.data);
        })
        .catch(function (error) {
          console.log(error);
          setError(error);
        })
  }, []);
  return (
    <div>
      {console.log("data",data)}
      {<UserList user={data}/>}

    </div>
  );
}

export default App;
