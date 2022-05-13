import { useState } from "react";
import BalanceContainer from "../components/layout/BalanceContainer";
import Transactions from "../components/layout/Transactions";
import Users from "../components/layout/Users";
import { baseUrl } from "../config"
import useFetch from "../services/useFetch.hook";


const balances = () => {

    const users = useFetch('/v1/users');
    const [balances, setBalances] = useState();
    const [transactions, setTransactions] = useState();
    const [user, setUser] = useState('')

    const fetchBalance = async (id: string) => {
        const resB = await fetch(`${baseUrl}/v1/balances/${id}`);
        const balances = await resB.json();

        const resT = await fetch(`${baseUrl}/v1/transactions/${id}`);
        const txs = await resT.json();

        setUser(id);
        setBalances(balances);
        setTransactions(txs);
    }

    const processInterest = async(asset: string) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: user, asset: asset })
        };

        const res = await fetch(`${baseUrl}/v1/interest`, requestOptions)
        const json = await res.json();

        fetchBalance(user)
    }


  return (
      <div>
        <h1 className="text-3xl mb-2 font-bold">Balances</h1>
        <div className="container grid grid-cols-3 gap-4">
        <div className="col-span-1">
            <Users users={users.data as string[]} fetchBalance={fetchBalance}/>
            <Transactions transactions={transactions}/>
        </div>
        <div className="col-span-2">
            <BalanceContainer balances={balances} processInterest={processInterest}/>
        </div>
        </div>
      </div>
  )
}

export default balances;