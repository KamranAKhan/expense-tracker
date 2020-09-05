import {StateType, ActionType} from '../types/Types';

const TransactionReducer = (state:StateType[], action:ActionType) => {
    switch (action.type) {
        case 'NEW_TRANSACTION':
            return [action.payload, ...state];        
        case 'DELETE_TRANSACTION':
            return state.filter((item, index) => index !== action.payload);
        default:
            return state;
    }
}

export default TransactionReducer;

