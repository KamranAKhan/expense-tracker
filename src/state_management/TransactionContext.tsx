import {createContext} from 'react';
import {GlobalContext} from '../types/Types';

export const TransactionContext = createContext<GlobalContext>(undefined as any);