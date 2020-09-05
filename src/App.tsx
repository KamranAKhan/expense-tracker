import React from 'react';
import './App.css';

import ExpenseTrackerApp from './ExpenseTrackerApp';
import {InitializeFirebase} from './firebase';

function App() {

  InitializeFirebase();

  return (
    <ExpenseTrackerApp></ExpenseTrackerApp>
  );
}

export default App;
