import './App.css';
import { useState, useEffect } from 'react'

function getUrl(path) {
  if (process.env.NODE_ENV === "development") {
    return 'http://localhost:5000' + path
  } else {
    return path
  }
}

function App() {
  const [message, setMessage] = useState("Initial Message")

  useEffect(() => {
    fetch(getUrl('/api/testing'))
    .then(res => res.json())
    .then(resBody => setMessage(resBody.message))
    .catch(err => {
      console.log(err)
    })
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
       {message}
      </header>
    </div>
  );
}

export default App;
