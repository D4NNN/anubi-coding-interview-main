import TableHeader from "./TableHeader"
import TableRow from "./TableRow"
import { useState } from "react"
import Transaction from "../../types/transaction"


const Table = ({tBodyData}: {tBodyData: Transaction[]}) => {


  //Simple array used to create the table's header, empty spaces must be used if a blank title is desired. Element order matters
  const tableHead = [ "", "Tx Id", "Amount","Asset","Symbol","Created On", "By"]

  const [balance, setBalance] = useState<any[]>([]);
  const [flag, setFlag] = useState(false);

  return (
    <div className="flex flex-col mt-8 shadow-lg">
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle">
            <table className="min-w-full shadow-lg">
              <thead>
                  <tr>
                  {tableHead.map((el, index) => ( <TableHeader key={index} title={el}/> ))}
                  </tr>
              </thead>
              <tbody className="bg-white overflow-x-scroll max-h-10">
                  {tBodyData?.map((el, index) => ( <TableRow key={index} transaction={el}/> ))}
              </tbody>
            </table>
            {flag && balance.map((el) => (<div key={el}>{el}</div>))}
        </div>
      </div>
    </div>
  )
}

export default Table