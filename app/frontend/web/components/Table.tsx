import TableHeader from "./TableHeader"
import TableObject from "../types/tableObject"
import TableRow from "./TableRow"
import { baseUrl } from "../config"
import { useState } from "react"

const Table = ({data}: {data: TableObject}, userId: string) => {

  const [balance, setBalance] = useState<any[]>([]);
  const [flag, setFlag] = useState(false);


  const fetchBalance = async (id: string) => {
    const res = await fetch(`${baseUrl}/v1/balances/${id}`);
    const balances = await res.json();
    setFlag(true);
    setBalance(balances.map((el: any) => {el.asset, el.amount}));
  }

  return (
    <div className="flex flex-col mt-8">
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full shadow-lg">
              <thead>
                  <tr>
                  {data.tHeaderData.map((el, index) => ( <TableHeader key={index} title={el}/> ))}
                  </tr>
              </thead>
              <tbody className="bg-white">
                  {data.tBodyData.map((el, index) => ( <TableRow key={index} transaction={el} funcProp={(id: string) => fetchBalance(id)}/> ))}
              </tbody>
            </table>
            {flag && balance.map((el) => (<div key={el}>{el}</div>))}
        </div>
      </div>
    </div>
  )
}

export default Table