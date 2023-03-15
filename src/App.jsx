import './App.css';
import Landing from './components/Landing';
import Chat from './components/Chat';
import { useState } from 'react';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';

function App() {

  const [name, setName] = useState('');

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path='/' element={<Landing setName={setName} />} />
          <Route path='/chat' element={<Chat name={name} />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
