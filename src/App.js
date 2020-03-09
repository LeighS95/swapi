import React from 'react';
import CardSection from './components/CardSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="heading">Ships</h1>
      <p classNAme="subheading">These are the ships with more that 10 in crew and sorted by number in crew in decending order. Additionally a star icon denotes most film apperances (more than one will show if in same amount of films).</p>
      <CardSection />
    </div>
  );
}

export default App;
