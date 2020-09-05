import React, { useReducer } from 'react';
import TransactionReducer from './TransactionReducer';
import {TransactionContext} from './TransactionContext';
import {StateType, GlobalContext} from '../types/Types';

export const ContextProvider:React.FC<any> = ({ children }) => {
    
    const [state, dispatch] = useReducer(TransactionReducer,[] as GlobalContext[]);    
    function addNewTransaction(transaction:StateType) {
        dispatch({
            type: 'NEW_TRANSACTION',
            payload: transaction
        })
    }    
    
    function deleteTransaction(index: number) { 
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: index
        })
    }

    return (
        <TransactionContext.Provider value={
            {
                transactions: state,
                addNewTransaction,                                
                deleteTransaction                
            }
        }>
            {children}
        </TransactionContext.Provider>
    )



}