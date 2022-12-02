import React from 'react';
import './App.css';
import AutoCompleteInput from "./components/AutoCompleteInput/AutoCompleteInput";

const App = () => {
  return (
    <div className={'container'}>
      <h1 className={'container title'} data-testid={'title'}>Auto-complete demo!</h1>
      <h2 className={'container description'}>This is an auto-complete demo, try searching for <b>countries</b> in the below input:</h2>
      <AutoCompleteInput/>
    </div>
  );
}

export default App;
