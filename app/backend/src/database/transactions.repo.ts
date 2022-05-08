import { Injectable } from "@nestjs/common"
import * as MOCKED_TRANSACTIONS from "./transactions.json"
import { Transaction } from "./transactions.types"

/**
 * This repo class is a "mocked" in-memory transactions database
 * that should be used in order to perform any CRUD operation
 */
@Injectable()
export class TransactionsRepo {
  private readonly transactions = MOCKED_TRANSACTIONS as Transaction[]

  getAll = () => this.transactions

  add = (transaction: Transaction) => this.transactions.push(transaction)

  getBalanceByUser = (id: string) => {

    const totals = {};
    const res = [];
    const userAsset = this.transactions.filter((el) => el.user.id === id);

    userAsset.forEach((el) => {
      if (totals.hasOwnProperty(el.asset)) totals[el.asset] = totals[el.asset] + el.amount;
      else totals[el.asset] = el.amount
    })

    for(const el in totals) res.push({asset: el, amount: totals[el]});

    return res;
  }
}
