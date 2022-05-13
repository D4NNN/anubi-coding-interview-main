import Transaction from "../../types/transaction"
import { Crypto } from "../../types/crypto.enum"
import CryptoIcon from "../icons/CryptoIcon"
import NatureIcon from "../icons/NatureIcon"


const TableRow = ({transaction}: {transaction: Transaction}) => {

  const tdStyle = "px-6 py-4 whitespace-no-wrap border-b border-lightGrey text-center"

  return (
    <tr>
      <td className={tdStyle}>
        <NatureIcon nature={transaction.nature.code}/>
      </td>
      <td className={tdStyle}>{transaction.id}</td>
      <td className={tdStyle}>{transaction.amount}</td>
      <td className={tdStyle}>{transaction.asset}</td>
      <td className={tdStyle}>
        <CryptoIcon asset={transaction.asset as Crypto}/>
      </td>
      <td className={tdStyle}>{new Date(transaction.createdOn).toLocaleString()}</td>
      <td className={tdStyle}>{transaction.user.id}</td>
    </tr>
  )
}

export default TableRow