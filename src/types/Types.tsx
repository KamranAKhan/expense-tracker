import { type } from "os";

export type StateType = {
    amount: number
    desc: string
    isIncome: boolean
}

export type ActionType = {
    type: string
    payload: any    
}

export type GlobalContext = {
    transactions: StateType[],
    addNewTransaction: (transaction:StateType) => void,
    deleteTransaction: (index:number) => void

}
