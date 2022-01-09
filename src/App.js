import { useEffect, useState } from 'react';
import DisplayName from './components/DisplayName';
import './App.css';

function App() {
  const name = 'John Paul Gabule';
  const [username, setUsername] = useState('mike');

  function handleOnChange(e) {
    setUsername(e.target.value);
  }

  useEffect(() => {
    document.title = username;
  }, [username]);

  return (
    <div className='App'>
      <h1>Hello ReactJS</h1>
      <DisplayName name={name} age={28} gender={'male'} />
      <p>
        <input type={'text'} value={username} onChange={handleOnChange} />
      </p>
      {username}
    </div>
  );
}

export default App;
