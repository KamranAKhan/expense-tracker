import React, { useContext } from 'react';
import { TransactionContext } from './state_management/TransactionContext';
import {GlobalContext, StateType} from './types/Types';

const TransactionList = () => {

    const { transactions, deleteTransaction } = useContext(TransactionContext);    
    

    const deleteSingleTransaction = (index: number) => {        
        deleteTransaction(index);                
    }

    return (
        <div className="transaction-history">
            <h3>History</h3>
            <hr />
            <div className="transaction-list">
                <ul>
                    {transactions.map((transObj:StateType, ind:number) => {
                        return (
                            <li className={transObj.isIncome ? "transaction-income" : "transaction-expense"} key={ind} data-abc={ind}>
                                {transObj.desc}
                                <span>${transObj.amount}</span>
                                <button className="delete-transaction" onClick={() => deleteSingleTransaction(ind)}>x</button>
                            </li>
                        )
                    })}                   
                </ul>
            </div>
        </div>
    )
}

export default TransactionList;