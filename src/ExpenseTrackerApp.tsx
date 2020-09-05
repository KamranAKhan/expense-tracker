import React from 'react';
import Paper from '@material-ui/core/Paper';
// importing custom components here
import Header from './Header';
import BalanceIncomeExpense from './BalanceIncomeExpense';
import TransactionList from './TransactionList';
import NewTransaction from './NewTransaction';

// importing Context 
import { ContextProvider } from './state_management/ContextProvider';



const ExpenseTrackerApp = () => {
    return (
        <div className="expense-tracker">
            <ContextProvider>
                <Header />
                <BalanceIncomeExpense />
                <TransactionList />
                <NewTransaction />
            </ContextProvider>
        </div>
    )
}


export default ExpenseTrackerApp;