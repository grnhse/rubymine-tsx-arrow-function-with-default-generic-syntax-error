import React from 'react';
import logo from './logo.svg';
import './App.css';

const Foo = <T = string,>(_props: T) => {
    return <div>'hello!'</div>;
}

function App() {
  return (
    <div className="App">
      <Foo />
    </div>
  );
}

export default App;
