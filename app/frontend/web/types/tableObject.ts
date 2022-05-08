import Transaction from "./transaction"

export default interface TableObject {
    tHeaderData: string[];
    tBodyData: Transaction[];
}