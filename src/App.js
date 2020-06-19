import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { GlobalProvider } from './context/GlobalState'

//importing
import { Header } from './components/Header.js';
import { Balance } from './components/Balance.js';
import { AccountSummary } from './components/AccountSummary.js';
import { TransactionHistory } from './components/TransactionHistory.js';
import { AddTransaction } from './components/AddTransaction.js';


function App() {
  return (

    <GlobalProvider>
      <Header />

      <div className="container">
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    
    </GlobalProvider>
  );
}

export default App;
