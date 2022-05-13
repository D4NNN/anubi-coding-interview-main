import Transaction from "../../types/transaction"
import CryptoIcon from "../icons/CryptoIcon"
import NatureIcon from "../icons/NatureIcon";

import { Crypto } from "../../types/crypto.enum";



const Transaction = ({transaction}: {transaction: Transaction}) => {
  return (
    <div className="grid grid-cols-5 border-b-2 p-1 border-lightGrey">
        <span className="col-span-1">
            <NatureIcon nature={transaction.nature.code} />
        </span>
        <span className="col-span-1">
            <CryptoIcon asset={transaction.asset as Crypto}/>
            <span className="ml-1">{transaction.asset}</span>
        </span>
        <span className="col-span-1">{transaction.amount.toFixed(3)}</span>
        <span className="col-span-2">{new Date(transaction.createdOn).toDateString()}</span>
    </div>
  )
}

export default Transaction