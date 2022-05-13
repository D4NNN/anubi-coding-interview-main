import styles from "../../styles/Balances.module.css";
import Transaction from "../../types/transaction";
import NoContent from "../elements/NoContent";
import TransactionEl  from "../elements/Transaction";


const Transactions = ({transactions}: {transactions?: Transaction[]}) => {
  return (
    <div className="container shadow-lg rounded-md p-4">
        <h2 className="text-2xl font-medium">Transactions</h2>
        <div className={styles.separator}></div>
        <div className="overflow-y-scroll max-h-80">
          {transactions ? transactions.map((el, index) => ( <TransactionEl key={index} transaction={el}/> )) : <NoContent msg="Select a User"/>}
        </div>
    </div>
  )
}

export default Transactions