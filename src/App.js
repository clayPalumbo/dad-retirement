import './App.css';
import React from 'react';
import Countdown from 'react-countdown';

const Completionist = () => <span>Holy shit man you actually did it!</span>;
const time = new Date(1775088000000);
const test = Date.now() + 10000;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span className='count-down'>
        {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
      </span>
    );
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.imgur.com/krIX3Sn.jpg" height={300} alt="Dad"/>
        <div className='container'>
        <div className='title'>Pat's Retirement Countdown</div>
      <Countdown date={time} renderer={renderer}/>
      <div className='date'>04/02/2026</div>
      </div>
      </header>
    </div>
  );
}

export default App;
