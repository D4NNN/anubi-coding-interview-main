import Transaction from "../types/transaction"
import { Crypto } from "../types/crypto.enum"
import CryptoIcon from "./CryptoIcon"
import NatureIcon from "./NatureIcon"
import {MdAccountBalanceWallet} from 'react-icons/md'


interface propInterface {
  transaction: Transaction,
  funcProp: (id: string) => void,
}

const TableRow = (prop: propInterface) => {

  const tdStyle = "px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center"

  return (
    <tr>
      <td className={tdStyle}>
        <NatureIcon nature={prop.transaction.nature.code}/>
      </td>
      <td className={tdStyle}>{prop.transaction.id}</td>
      <td className={tdStyle}>{prop.transaction.amount}</td>
      <td className={tdStyle}>{prop.transaction.asset}</td>
      <td className={tdStyle}>
        <CryptoIcon asset={prop.transaction.asset as Crypto}/>
      </td>
      <td className={tdStyle}>{new Date(prop.transaction.createdOn).toLocaleString()}</td>
      <td className={tdStyle}>{prop.transaction.user.id}</td>
      <td className={tdStyle} style={{cursor: 'pointer'}} onClick={() => (prop.funcProp(prop.transaction.user.id))}>
        <span><MdAccountBalanceWallet/></span>
        </td>
    </tr>
  )
}

export default TableRow